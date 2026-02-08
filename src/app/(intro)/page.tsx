'use client';
import Details from '@/components/ui/Details';
import Image from 'next/image';
import { useLayoutEffect, useState } from 'react';

const ITEM_DELAY_MS = 500;
const INTRO_ITEM_COUNT = 2;
const INTRO_START_DELAY_MS = 2000;

/**
 * Landing page content with a one-time intro animation on the home route.
 */
const IntroPage = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  // Stagger page items so each next item appears 1 second later.
  useLayoutEffect(() => {
    setIsAnimationReady(false);
    setVisibleCount(0);
    let currentCount = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const timeoutId = setTimeout(() => {
      setIsAnimationReady(true);
      currentCount = 1;
      setVisibleCount(currentCount);

      intervalId = setInterval(() => {
        currentCount += 1;
        setVisibleCount(currentCount);

        if (currentCount >= INTRO_ITEM_COUNT && intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      }, ITEM_DELAY_MS);
    }, INTRO_START_DELAY_MS);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="col-[1/5] flex w-full justify-center self-center">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-6 md:flex-row md:items-center md:justify-center">
        <div
          className={`flex justify-center ${isAnimationReady ? 'transition duration-700 ease-out' : 'transition-none'} ${visibleCount >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
        >
          <Details className="sm:translate-x-0" />
        </div>

        <div
          className={`flex justify-center ${isAnimationReady ? 'transition duration-700 ease-out' : 'transition-none'} ${visibleCount >= 2 ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
        >
          <div className="border-surface-border bg-surface shadow-bossanova-300/35 overflow-hidden rounded-2xl border shadow-lg backdrop-blur-sm">
            <Image
              src="/waiting-room.png"
              alt="Dental office waiting room"
              width={460}
              height={320}
              priority
              className="h-auto w-full max-w-[460px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
