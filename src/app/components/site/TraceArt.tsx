import { useEffect, useRef } from 'react';

const NODES: [number, number, boolean?][] = [
  [120, 92], [110, 336], [220, 92], [220, 44, true], [96, 150], [360, 150, true], [360, 268],
  [180, 336], [180, 424, true], [520, 424], [300, 384], [430, 118], [570, 118, true], [570, 300],
];

/** Radius (in viewBox units) within which nodes light up around the cursor. */
const HOT_RADIUS = 90;

/**
 * Decorative circuit-trace line art — hairline paths with square nodes and three
 * signal pulses that travel along them on their own. On devices with a mouse,
 * the art drifts slightly with the cursor (parallax via --mx/--my, see
 * PointerFX) and nodes near the cursor light up. Inline SVG so it follows the
 * theme's CSS variables.
 */
export default function TraceArt({ className = '' }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg || typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rects = Array.from(svg.querySelectorAll<SVGRectElement>('rect[data-x]'));
    let frame = 0;
    let last: PointerEvent | null = null;

    const update = () => {
      frame = 0;
      if (!last) return;
      const ctm = svg.getScreenCTM();
      if (!ctm) return;
      const pt = new DOMPoint(last.clientX, last.clientY).matrixTransform(ctm.inverse());
      for (const r of rects) {
        const dx = Number(r.dataset.x) - pt.x;
        const dy = Number(r.dataset.y) - pt.y;
        if (dx * dx + dy * dy < HOT_RADIUS * HOT_RADIUS) r.setAttribute('data-hot', '');
        else r.removeAttribute('data-hot');
      }
    };
    const onMove = (e: PointerEvent) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <svg
      ref={ref}
      className={`trace-art ${className}`}
      viewBox="0 0 640 520"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <path className="tr" d="M120 92 H220 V44 H640" />
      <path className="tr-acc" d="M96 0 V150 H360 V268 H640" />
      <path className="tr" d="M110 336 H180 V424 H520 V520" />
      <path className="tr" d="M300 520 V384 H640" />
      <path className="tr" d="M430 0 V118 H570 V300 H640" />
      <path className="tr-flow" d="M96 0 V150 H360 V268 H640" />
      <path className="tr-flow slow" d="M110 336 H180 V424 H520 V520" />
      <path className="tr-flow fast" d="M430 0 V118 H570 V300 H640" />
      {NODES.map(([x, y, acc]) => (
        <rect
          key={`${x}-${y}`}
          className={acc ? 'nd-acc' : 'nd'}
          data-x={x}
          data-y={y}
          x={x - 3}
          y={y - 3}
          width={6}
          height={6}
        />
      ))}
    </svg>
  );
}
