# RUSTEAK DOT

A single-page, scroll-driven furniture experience built with Next.js, React, TypeScript, Tailwind CSS, GSAP ScrollTrigger, and HTML5 Canvas. The sofa sequence **is** the home page: it starts in the first viewport and runs for the entire page.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## How the sequence works

- The 40 WebP frames live in `public/frames/` and are loaded by `src/lib/frame-loader.ts` with bounded concurrency and `decode()`-first preparation.
- `FrameCanvas` keeps the decoded frames in memory and paints them to a DPR-aware canvas. Draws are coalesced into `requestAnimationFrame`, with a short timer fallback for throttled/occluded windows.
- `SofaSequence` creates a pinned GSAP ScrollTrigger. A scrubbed proxy tween maps scroll progress to one of the 40 frames, so scrolling down advances the sequence and scrolling up reverses it.
- Overlay copy, the frame counter, and the progress rail update imperatively; React only re-renders when the active chapter changes.
- Native scrolling is never hijacked, and `prefers-reduced-motion` removes scrub easing and decorative transitions.

## Structure

```
src/
  app/                         App Router entry, global styles, metadata
  components/
    site-header.tsx            Minimal fixed header
    sofa-sequence/
      sofa-sequence.tsx        Pinned scroll orchestration + chapter copy
      frame-canvas.tsx         Canvas renderer and frame cache
  lib/
    frames.ts                  Frame metadata and path helpers
    frame-loader.ts            Batched image preloading
public/
  frames/                      40 sequential WebP frames
```

## Replacing the frames

Keep the existing naming convention and count:

```
frame_000000.webp … frame_000039.webp
```

If the frame count changes, update `FRAME_COUNT` in `src/lib/frames.ts`. A 16:9 source is assumed; the canvas uses `object-fit: contain`-style drawing so other ratios still letterbox cleanly.
