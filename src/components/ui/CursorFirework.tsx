'use client';

import { useEffect, useRef, useState } from 'react';

interface Burst {
  id: number;
  x: number;
  y: number;
}

const INTERACTIVE_SELECTOR =
  'a,button,input[type="button"],input[type="submit"],[role="button"]';
const BURST_DURATION_MS = 520;

/**
 * Renders a small spark-burst at cursor position when interactive elements are clicked.
 */
const CursorFirework = () => {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const burstIdRef = useRef(0);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest(INTERACTIVE_SELECTOR)) return;

      burstIdRef.current += 1;
      const id = burstIdRef.current;
      const burst = {
        id,
        x: event.clientX,
        y: event.clientY,
      };

      setBursts((previous) => [...previous, burst]);

      window.setTimeout(() => {
        setBursts((previous) =>
          previous.filter((currentBurst) => currentBurst.id !== id),
        );
      }, BURST_DURATION_MS);
    };

    window.addEventListener('pointerdown', handlePointerDown, true);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown, true);
    };
  }, []);

  return (
    <>
      {bursts.map(({ id, x, y }) => (
        <span
          key={id}
          aria-hidden
          className="cursor-firework pointer-events-none fixed z-[90] h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ left: x, top: y }}
        />
      ))}
    </>
  );
};

export default CursorFirework;
