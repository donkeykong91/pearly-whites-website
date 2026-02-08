'use client';
import Details from '@/components/ui/Details';
import Image from 'next/image';

/**
 * Landing page content with deterministic mount animation.
 */
const IntroPage = () => {
  return (
    <div className="col-[1/5] flex w-full justify-center self-center">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-6 md:flex-row md:items-center md:justify-center">
        <div className="intro-drop-item intro-drop-item--first flex justify-center">
          <Details className="sm:translate-x-0" />
        </div>

        <div className="intro-drop-item intro-drop-item--second flex justify-center">
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
