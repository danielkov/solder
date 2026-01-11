import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';

import type { ShippingRateOrRef } from './ShippingRateOrRef';
import { ShippingRateOrRefSchema } from './ShippingRateOrRef';
/**
 * PaymentLinksResourceShippingOption
 *
 * 
 */
export interface PaymentLinksResourceShippingOption {
  /**
   * A non-negative integer in cents representing how much to charge.
   */
  shippingAmount: number;
  /**
   * The ID of the Shipping Rate to use for this shipping option.
   */
  shippingRate: ShippingRateOrRef;
}

export const PaymentLinksResourceShippingOptionSchema: TypedSchema<PaymentLinksResourceShippingOption> = typed<PaymentLinksResourceShippingOption>(object({
  shippingAmount: number(),
  shippingRate: ShippingRateOrRefSchema,
}));