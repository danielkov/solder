import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';

import type { ShippingRateOrRef } from './ShippingRateOrRef';
import { ShippingRateOrRefSchema } from './ShippingRateOrRef';
/**
 * PaymentPagesCheckoutSessionShippingOption
 *
 * 
 */
export interface PaymentPagesCheckoutSessionShippingOption {
  /**
   * A non-negative integer in cents representing how much to charge.
   */
  shippingAmount: number;
  /**
   * The shipping rate.
   */
  shippingRate: ShippingRateOrRef;
}

export const PaymentPagesCheckoutSessionShippingOptionSchema: TypedSchema<PaymentPagesCheckoutSessionShippingOption> = typed<PaymentPagesCheckoutSessionShippingOption>(object({
  shippingAmount: number(),
  shippingRate: ShippingRateOrRefSchema,
}));