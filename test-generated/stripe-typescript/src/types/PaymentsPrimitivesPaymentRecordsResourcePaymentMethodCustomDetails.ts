import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCustomDetails
 *
 * Custom Payment Methods represent Payment Method types not modeled directly in
the Stripe API. This resource consists of details about the custom payment method
used for this payment attempt.
 */
export interface PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCustomDetails {
  /**
   * Display name for the custom (user-defined) payment method type used to make this payment.
   */
  displayName: string;
  /**
   * The custom payment method type associated with this payment.
   */
  type?: string;
}

export const PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCustomDetailsSchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCustomDetails> = typed<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCustomDetails>(object({
  displayName: string(),
  type: optional(string()),
}));