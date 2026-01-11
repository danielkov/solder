import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionConsent
 *
 * 
 */
export interface PaymentPagesCheckoutSessionConsent {
  /**
   * If `opt_in`, the customer consents to receiving promotional communications
from the merchant about this Checkout Session.
   */
  promotions?: string;
  /**
   * If `accepted`, the customer in this Checkout Session has agreed to the merchant's terms of service.
   */
  termsOfService?: string;
}

export const PaymentPagesCheckoutSessionConsentSchema: TypedSchema<PaymentPagesCheckoutSessionConsent> = typed<PaymentPagesCheckoutSessionConsent>(object({
  promotions: optional(string()),
  termsOfService: optional(string()),
}));