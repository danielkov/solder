import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * PortalSubscriptionUpdateProductAdjustableQuantity
 *
 * 
 */
export interface PortalSubscriptionUpdateProductAdjustableQuantity {
  /**
   * If true, the quantity can be adjusted to any non-negative integer.
   */
  enabled: boolean;
  /**
   * The maximum quantity that can be set for the product.
   */
  maximum?: number;
  /**
   * The minimum quantity that can be set for the product.
   */
  minimum: number;
}

export const PortalSubscriptionUpdateProductAdjustableQuantitySchema: TypedSchema<PortalSubscriptionUpdateProductAdjustableQuantity> = typed<PortalSubscriptionUpdateProductAdjustableQuantity>(object({
  enabled: boolean(),
  maximum: optional(number()),
  minimum: number(),
}));