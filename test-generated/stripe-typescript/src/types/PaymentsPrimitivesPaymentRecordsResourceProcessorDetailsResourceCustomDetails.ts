import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsResourceCustomDetails
 *
 * Custom processors represent payment processors not modeled directly in
the Stripe API. This resource consists of details about the custom processor
used for this payment attempt.
 */
export interface PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsResourceCustomDetails {
  /**
   * An opaque string for manual reconciliation of this payment, for example a check number or a payment processor ID.
   */
  paymentReference?: string;
}

export const PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsResourceCustomDetailsSchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsResourceCustomDetails> = typed<PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsResourceCustomDetails>(object({
  paymentReference: optional(string()),
}));