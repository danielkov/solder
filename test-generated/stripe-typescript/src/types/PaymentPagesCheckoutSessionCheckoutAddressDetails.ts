import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * PaymentPagesCheckoutSessionCheckoutAddressDetails
 *
 * 
 */
export interface PaymentPagesCheckoutSessionCheckoutAddressDetails {
  /**
   * Address
   *
   * 
   */
  address: Address;
  /**
   * Customer name.
   */
  name: string;
}

export const PaymentPagesCheckoutSessionCheckoutAddressDetailsSchema: TypedSchema<PaymentPagesCheckoutSessionCheckoutAddressDetails> = typed<PaymentPagesCheckoutSessionCheckoutAddressDetails>(object({
  address: AddressSchema,
  name: string(),
}));