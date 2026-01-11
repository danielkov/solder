import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentLinksResourcePaymentMethodReuseAgreement
 *
 * 
 */
export interface PaymentLinksResourcePaymentMethodReuseAgreement {
  /**
   * Determines the position and visibility of the payment method reuse agreement in the UI. When set to `auto`, Stripe's defaults will be used.

When set to `hidden`, the payment method reuse agreement text will always be hidden in the UI.
   */
  position: string;
}

export const PaymentLinksResourcePaymentMethodReuseAgreementSchema: TypedSchema<PaymentLinksResourcePaymentMethodReuseAgreement> = typed<PaymentLinksResourcePaymentMethodReuseAgreement>(object({
  position: string(),
}));