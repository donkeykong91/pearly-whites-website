'use client';

import { createContext, useContext } from 'react';

interface SiteEntranceContextValue {
  isEntranceDone: boolean;
}

const SiteEntranceContext = createContext<SiteEntranceContextValue>({
  isEntranceDone: true,
});

/**
 * Shared entrance animation status for coordinating shell and page animations.
 */
export const useSiteEntrance = () => useContext(SiteEntranceContext);

export default SiteEntranceContext;
