"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { preloadFrames, type FrameImage } from "@/lib/frame-loader";
import { FRAME_COUNT, FRAME_HEIGHT, FRAME_WIDTH } from "@/lib/frames";

export type FrameCanvasHandle = {
  setFrame: (index: number) => void;
};

type FrameCanvasProps = {
  className?: string;
  label?: string;
};

const clamp = (value: number) =>
  Math.min(Math.max(Math.round(value), 0), FRAME_COUNT - 1);

export const FrameCanvas = forwardRef<FrameCanvasHandle, FrameCanvasProps>(
  function FrameCanvas(
    { className, label = "RUSTEAK DOT sofa rotating through forty views" },
    ref,
  ) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const framesRef = useRef<Array<FrameImage | null>>([]);
    const targetFrameRef = useRef(0);
    const drawnFrameRef = useRef(-1);
    const rafRef = useRef<number | null>(null);
    const fallbackTimerRef = useRef<number | null>(null);

    const [loadProgress, setLoadProgress] = useState(0);
    const [isReady, setIsReady] = useState(false);

    const clearScheduledDraw = useCallback(() => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (fallbackTimerRef.current !== null) {
        window.clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
    }, []);

    const draw = useCallback(() => {
      clearScheduledDraw();

      const canvas = canvasRef.current;
      const frame = framesRef.current[targetFrameRef.current];
      if (!canvas || !frame) return;

      const context = canvas.getContext("2d", { alpha: true });
      if (!context) return;

      const { width, height } = canvas;
      const sourceWidth = frame.naturalWidth || FRAME_WIDTH;
      const sourceHeight = frame.naturalHeight || FRAME_HEIGHT;
      const scale = Math.min(width / sourceWidth, height / sourceHeight);
      const drawWidth = sourceWidth * scale;
      const drawHeight = sourceHeight * scale;

      context.clearRect(0, 0, width, height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(
        frame,
        (width - drawWidth) / 2,
        (height - drawHeight) / 2,
        drawWidth,
        drawHeight,
      );

      drawnFrameRef.current = targetFrameRef.current;
    }, [clearScheduledDraw]);

    const scheduleDraw = useCallback(() => {
      if (rafRef.current !== null || fallbackTimerRef.current !== null) return;

      rafRef.current = requestAnimationFrame(draw);
      fallbackTimerRef.current = window.setTimeout(() => {
        fallbackTimerRef.current = null;
        if (rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
        draw();
      }, 40);
    }, [draw]);

    useImperativeHandle(
      ref,
      () => ({
        setFrame(index) {
          const next = clamp(index);
          const changed = next !== targetFrameRef.current;
          targetFrameRef.current = next;

          if (changed || drawnFrameRef.current !== next) {
            scheduleDraw();
          }
        },
      }),
      [scheduleDraw],
    );

    const resizeCanvas = useCallback(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        drawnFrameRef.current = -1;
        scheduleDraw();
      }
    }, [scheduleDraw]);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      resizeCanvas();
      const observer = new ResizeObserver(resizeCanvas);
      observer.observe(canvas);
      window.addEventListener("orientationchange", resizeCanvas);

      return () => {
        observer.disconnect();
        window.removeEventListener("orientationchange", resizeCanvas);
      };
    }, [resizeCanvas]);

    useEffect(() => {
      const controller = new AbortController();

      framesRef.current = new Array<FrameImage | null>(FRAME_COUNT).fill(null);
      drawnFrameRef.current = -1;
      setLoadProgress(0);
      setIsReady(false);

      preloadFrames({
        signal: controller.signal,
        concurrency: 8,
        onProgress: ({ progress }) => {
          if (!controller.signal.aborted) setLoadProgress(progress);
        },
        onFrameReady: (index, image) => {
          if (controller.signal.aborted) return;
          framesRef.current[index] = image;
          if (index === targetFrameRef.current) scheduleDraw();
        },
      })
        .then((frames) => {
          if (controller.signal.aborted) return;
          framesRef.current = frames;
          setIsReady(true);
          scheduleDraw();
        })
        .catch((error) => {
          if (!controller.signal.aborted) {
            console.error("[RUSTEAK] Frame preload error", error);
          }
        });

      return () => {
        controller.abort();
        clearScheduledDraw();
      };
    }, [clearScheduledDraw, scheduleDraw]);

    return (
      <div className={className} aria-hidden={false}>
        <div className="sequence-canvas-shell">
          <canvas
            ref={canvasRef}
            role="img"
            aria-label={label}
            className="block h-full w-full mix-blend-multiply"
          />
        </div>

        {/* Minimal Luminous Preloader */}
        <div
          className={`pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-[#faf8f5] transition-opacity duration-700 ${
            isReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-hidden={isReady}
        >
          <div className="flex w-52 flex-col items-center gap-4">
            <span className="font-heading text-xs tracking-[0.25em] text-ink font-semibold">
              RUSTEAK <span className="text-gold-dark font-normal">DOT</span>
            </span>
            <div className="h-[2px] w-full overflow-hidden bg-hairline">
              <div
                className="h-full origin-left bg-gold transition-transform duration-200 ease-out"
                style={{ transform: `scaleX(${loadProgress})` }}
              />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-ink-muted tabular-nums">
              Loading 360° Sequence — {Math.round(loadProgress * 100)}%
            </p>
          </div>
        </div>
      </div>
    );
  },
);
