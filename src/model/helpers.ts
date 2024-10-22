import { PADDING } from '../constants';

/**
 * Get padding
 * - By level
 * - By ordinal
 */
export const getPadding = (level: number, ordinal: number): string =>
  level === 0 ? `${ordinal === 0 ? PADDING : 0} ${PADDING} ${PADDING}` : '';
