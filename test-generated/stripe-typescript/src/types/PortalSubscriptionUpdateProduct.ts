import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';

import type { PortalSubscriptionUpdateProductAdjustableQuantity } from './PortalSubscriptionUpdateProductAdjustableQuantity';
import { PortalSubscriptionUpdateProductAdjustableQuantitySchema } from './PortalSubscriptionUpdateProductAdjustableQuantity';
/**
 * PortalSubscriptionUpdateProduct
 *
 * 
 */
export interface PortalSubscriptionUpdateProduct {
  /**
   * PortalSubscriptionUpdateProductAdjustableQuantity
   *
   * 
   */
  adjustableQuantity: PortalSubscriptionUpdateProductAdjustableQuantity;
  /**
   * The list of price IDs which, when subscribed to, a subscription can be updated.
   */
  prices: Array<string>;
  /**
   * The product ID.
   */
  product: string;
}

export const PortalSubscriptionUpdateProductSchema: TypedSchema<PortalSubscriptionUpdateProduct> = typed<PortalSubscriptionUpdateProduct>(object({
  adjustableQuantity: PortalSubscriptionUpdateProductAdjustableQuantitySchema,
  prices: array(string()),
  product: string(),
}));