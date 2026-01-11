import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionShippingAddressCollection
 *
 * 
 */
export interface PaymentPagesCheckoutSessionShippingAddressCollection {
  /**
   * An array of two-letter ISO country codes representing which countries Checkout should provide as options for
shipping locations. Unsupported country codes: `AS, CX, CC, CU, HM, IR, KP, MH, FM, NF, MP, PW, SY, UM, VI`.
   */
  allowedCountries: Array<string>;
}

export const PaymentPagesCheckoutSessionShippingAddressCollectionSchema: TypedSchema<PaymentPagesCheckoutSessionShippingAddressCollection> = typed<PaymentPagesCheckoutSessionShippingAddressCollection>(object({
  allowedCountries: array(string()),
}));