import { ModelNodeType } from './definitions';

/**
 * Check if a node is hidden
 * - By property visible == false
 * - By property type === 'hidden'
 */
export const isNodeHidden = (visible: boolean, type: ModelNodeType) =>
  visible == false || type === 'hidden';
