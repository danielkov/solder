import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_link
 *
 * 
 */
export interface PaymentMethodDetailsLink {
  /**
   * Two-letter ISO code representing the funding source country beneath the Link payment.
You could use this attribute to get a sense of international fees.
   */
  country?: string;
}

export const PaymentMethodDetailsLinkSchema: TypedSchema<PaymentMethodDetailsLink> = typed<PaymentMethodDetailsLink>(object({
  country: optional(string()),
}));