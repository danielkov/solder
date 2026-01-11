import { TypedSchema, array, number, object, typed } from '@speakeasy-api/tonic';

import type { FaqItem } from './FaqItem';
import { FaqItemSchema } from './FaqItem';
/**
 * List of FAQ items
 */
export interface FaqList {
  items: Array<FaqItem>;
  /**
   * Total number of FAQ items
   */
  total: number;
}

export const FaqListSchema: TypedSchema<FaqList> = typed<FaqList>(object({
  items: array(FaqItemSchema),
  total: number(),
}));