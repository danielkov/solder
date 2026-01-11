import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity
 *
 * 
 */
export interface PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity {
  /**
   * Set to true if the quantity can be adjusted to any non-negative integer.
   */
  enabled: boolean;
  /**
   * The maximum quantity of this item the customer can purchase. By default this value is 99. You can specify a value up to 999999.
   */
  maximum?: number;
  /**
   * The minimum quantity of this item the customer must purchase, if they choose to purchase it. Because this item is optional, the customer will always be able to remove it from their order, even if the `minimum` configured here is greater than 0. By default this value is 0.
   */
  minimum?: number;
}

export const PaymentPagesCheckoutSessionOptionalItemAdjustableQuantitySchema: TypedSchema<PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity> = typed<PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity>(object({
  enabled: boolean(),
  maximum: optional(number()),
  minimum: optional(number()),
}));