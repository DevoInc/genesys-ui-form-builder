import { TNodeType } from './definitions';

/**
 * Check if a node is hidden
 * - By property visible == false
 * - By property type === 'hidden'
 */
export const isNodeHidden = (visible: boolean, type: TNodeType) =>
  visible == false || type === 'hidden';
