import { FRAME_COUNT, getFramePath } from "@/lib/frames";

export type FrameImage = HTMLImageElement;

export type PreloadProgress = {
  loaded: number;
  total: number;
  progress: number;
  index: number;
};

type PreloadOptions = {
  signal?: AbortSignal;
  concurrency?: number;
  onProgress?: (state: PreloadProgress) => void;
  onFrameReady?: (index: number, image: FrameImage) => void;
};

const createAbortError = () =>
  new DOMException("Frame loading was aborted.", "AbortError");

function loadImage(src: string, signal?: AbortSignal): Promise<FrameImage> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(createAbortError());
      return;
    }

    const image = new Image();
    image.decoding = "async";

    const cleanup = () => {
      signal?.removeEventListener("abort", handleAbort);
      image.onload = null;
      image.onerror = null;
    };

    const handleAbort = () => {
      cleanup();
      image.src = "";
      reject(createAbortError());
    };

    signal?.addEventListener("abort", handleAbort, { once: true });

    image.onload = () => {
      cleanup();

      if (typeof image.decode !== "function") {
        resolve(image);
        return;
      }

      // `decode()` is preferred, but some browsers defer decoding for images
      // that are not in the document. Never let that stall the sequence.
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        window.clearTimeout(fallbackTimer);
        resolve(image);
      };
      const fallbackTimer = window.setTimeout(finish, 250);

      image.decode().then(finish, finish);
    };

    image.onerror = () => {
      cleanup();
      reject(new Error(`Unable to load frame: ${src}`));
    };

    image.src = src;
  });
}

/**
 * Preloads every sequence frame with bounded concurrency so the browser is
 * never saturated with 40 simultaneous image requests.
 */
export async function preloadFrames({
  signal,
  concurrency = 6,
  onProgress,
  onFrameReady,
}: PreloadOptions): Promise<Array<FrameImage | null>> {
  const frames: Array<FrameImage | null> = new Array(FRAME_COUNT).fill(null);
  let nextIndex = 0;
  let completed = 0;

  const report = (index: number) => {
    completed += 1;
    onProgress?.({
      loaded: completed,
      total: FRAME_COUNT,
      progress: completed / FRAME_COUNT,
      index,
    });
  };

  const worker = async () => {
    while (!signal?.aborted && nextIndex < FRAME_COUNT) {
      const index = nextIndex++;

      try {
        const image = await loadImage(getFramePath(index), signal);
        if (signal?.aborted) return;

        frames[index] = image;
        onFrameReady?.(index, image);
      } catch (error) {
        if (signal?.aborted) return;
        console.warn(`[RUSTEAK] Skipped frame ${index}`, error);
      }

      if (signal?.aborted) return;
      report(index);
    }
  };

  await Promise.all(
    Array.from({ length: Math.min(concurrency, FRAME_COUNT) }, worker),
  );

  return frames;
}
