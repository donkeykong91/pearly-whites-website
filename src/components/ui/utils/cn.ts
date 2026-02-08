import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines conditional classes and resolves Tailwind utility conflicts.
 */
export const cn = (...inputs: string[]) => twMerge(clsx(inputs));
