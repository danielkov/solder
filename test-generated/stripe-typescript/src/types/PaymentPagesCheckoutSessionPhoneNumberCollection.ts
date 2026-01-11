import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionPhoneNumberCollection
 *
 * 
 */
export interface PaymentPagesCheckoutSessionPhoneNumberCollection {
  /**
   * Indicates whether phone number collection is enabled for the session
   */
  enabled: boolean;
}

export const PaymentPagesCheckoutSessionPhoneNumberCollectionSchema: TypedSchema<PaymentPagesCheckoutSessionPhoneNumberCollection> = typed<PaymentPagesCheckoutSessionPhoneNumberCollection>(object({
  enabled: boolean(),
}));