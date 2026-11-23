/**
 * Shared metadata for the sofa frame sequence.
 *
 * Frames are stored in `public/frames` using six-digit zero padding so they
 * sort and load in deterministic order.
 */

export const FRAME_COUNT = 40;
export const FRAME_WIDTH = 1280;
export const FRAME_HEIGHT = 720;
export const FRAME_ASPECT_RATIO = FRAME_WIDTH / FRAME_HEIGHT;

const pad = (value: number, length = 6) => String(value).padStart(length, "0");

export function clampFrameIndex(index: number): number {
  if (!Number.isFinite(index)) return 0;
  return Math.min(Math.max(Math.round(index), 0), FRAME_COUNT - 1);
}

export function getFramePath(index: number): string {
  return `/frames/frame_${pad(clampFrameIndex(index))}.webp`;
}

export function progressToFrame(progress: number): number {
  const clamped = Math.min(Math.max(progress, 0), 1);
  return clampFrameIndex(clamped * (FRAME_COUNT - 1));
}

export function formatFrameCounter(index: number): string {
  return `${pad(clampFrameIndex(index) + 1, 2)} / ${pad(FRAME_COUNT, 2)}`;
}
