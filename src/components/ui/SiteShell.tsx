'use client';

import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import { ITEMS } from '@/components/ui/Navbar/constants';
import CursorFirework from '@/components/ui/CursorFirework';
import PageDropFadeIn from '@/components/ui/PageDropFadeIn';
import RecruiterCta from '@/components/ui/RecruiterCta';
import SiteEntranceContext from './SiteEntranceContext';
import { ReactNode, useEffect, useState } from 'react';

interface SiteShellProps {
  children: ReactNode;
}

const SHELL_SPREAD_DURATION_MS = 1800;
const HEADER_REVEAL_START_DELAY_MS = 120;
const HEADER_ITEM_STAGGER_MS = 180;
const FOOTER_CONTENT_DELAY_MS = 80;
const CONTENT_REVEAL_DELAY_MS = 500;
const ENTRANCE_SAFETY_TIMEOUT_MS = 2600;
const TOTAL_HEADER_ITEMS = ITEMS.length + 2;

/**
 * Coordinates the global shell entrance animation and content reveal order.
 */
const SiteShell = ({ children }: SiteShellProps) => {
  const [isSpreadStarted, setIsSpreadStarted] = useState(false);
  const [showHeaderContent, setShowHeaderContent] = useState(false);
  const [revealedHeaderItems, setRevealedHeaderItems] = useState(0);
  const [showFooterContent, setShowFooterContent] = useState(false);
  const [isEntranceDone, setIsEntranceDone] = useState(false);

  useEffect(() => {
    let headerIntervalId: ReturnType<typeof setInterval> | null = null;
    const rafId = requestAnimationFrame(() => setIsSpreadStarted(true));
    const headerStartTimeoutId = setTimeout(() => {
      setShowHeaderContent(true);
      let currentItem = 1;
      setRevealedHeaderItems(currentItem);

      headerIntervalId = setInterval(() => {
        currentItem += 1;
        setRevealedHeaderItems(currentItem);

        if (currentItem >= TOTAL_HEADER_ITEMS && headerIntervalId) {
          clearInterval(headerIntervalId);
          headerIntervalId = null;
        }
      }, HEADER_ITEM_STAGGER_MS);
    }, HEADER_REVEAL_START_DELAY_MS);

    const footerContentTimeoutId = setTimeout(() => {
      setShowFooterContent(true);
    }, SHELL_SPREAD_DURATION_MS + FOOTER_CONTENT_DELAY_MS);

    const doneTimeoutId = setTimeout(() => {
      setIsEntranceDone(true);
    }, SHELL_SPREAD_DURATION_MS + CONTENT_REVEAL_DELAY_MS);
    const safetyTimeoutId = setTimeout(() => {
      setIsEntranceDone(true);
      setShowHeaderContent(true);
      setShowFooterContent(true);
    }, ENTRANCE_SAFETY_TIMEOUT_MS);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(headerStartTimeoutId);
      clearTimeout(footerContentTimeoutId);
      clearTimeout(doneTimeoutId);
      clearTimeout(safetyTimeoutId);
      if (headerIntervalId) clearInterval(headerIntervalId);
    };
  }, []);

  return (
    <SiteEntranceContext.Provider value={{ isEntranceDone }}>
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <Header
          isSpreadStarted={isSpreadStarted}
          showContent={showHeaderContent}
          revealedCount={revealedHeaderItems}
          className={`transition-transform duration-[1800ms] ease-out ${isSpreadStarted ? 'translate-y-0' : 'translate-y-[calc(50vh-3rem)]'}`}
        />

        <main className="flex flex-1 py-6">
          <PageDropFadeIn
            className="flex w-full flex-1 flex-col"
            disableOnPaths={['/']}
            isEnabled
          >
            {children}
          </PageDropFadeIn>
        </main>

        <Footer
          isSpreadStarted={isSpreadStarted}
          showContent={showFooterContent}
          className={`transition-transform duration-[1800ms] ease-out ${isSpreadStarted ? 'translate-y-0' : '-translate-y-[calc(50vh-3rem)]'}`}
        />
      </div>

      <CursorFirework />
      {isEntranceDone && <RecruiterCta />}
    </SiteEntranceContext.Provider>
  );
};

export default SiteShell;
