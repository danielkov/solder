import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * PaymentLinksResourcePhoneNumberCollection
 *
 * 
 */
export interface PaymentLinksResourcePhoneNumberCollection {
  /**
   * If `true`, a phone number will be collected during checkout.
   */
  enabled: boolean;
}

export const PaymentLinksResourcePhoneNumberCollectionSchema: TypedSchema<PaymentLinksResourcePhoneNumberCollection> = typed<PaymentLinksResourcePhoneNumberCollection>(object({
  enabled: boolean(),
}));