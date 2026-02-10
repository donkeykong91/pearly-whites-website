'use client';
import Details from '@/components/ui/Details';
import Image from 'next/image';

/**
 * Landing page content with deterministic mount animation.
 */
const IntroPage = () => {
  return (
    <div className="col-[1/5] flex w-full justify-center self-center px-1 sm:px-0">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-5 sm:gap-6 md:flex-row md:items-center md:justify-center">
        <div className="intro-drop-item intro-drop-item--first flex w-full justify-center md:w-auto">
          <Details className="w-full max-w-sm" />
        </div>

        <div className="intro-drop-item intro-drop-item--second flex w-full justify-center md:w-auto">
          <div className="border-surface-border bg-surface shadow-bossanova-300/35 w-full max-w-sm overflow-hidden rounded-2xl border shadow-lg backdrop-blur-sm md:max-w-[460px]">
            <Image
              src="/waiting-room.png"
              alt="Dental office waiting room"
              width={460}
              height={320}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
