import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and merges Tailwind CSS classes using tailwind-merge.
 * @param inputs - An array of class values (strings, objects, arrays).
 * @returns A string of merged and filtered class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
