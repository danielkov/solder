import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsResourceCustomDetails } from './PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsResourceCustomDetails';
import { PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsResourceCustomDetailsSchema } from './PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsResourceCustomDetails';
/**
 * PaymentsPrimitivesPaymentRecordsResourceProcessorDetails
 *
 * Processor information associated with this payment.
 */
export interface PaymentsPrimitivesPaymentRecordsResourceProcessorDetails {
  /**
   * PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsResourceCustomDetails
   *
   * Custom processors represent payment processors not modeled directly in
the Stripe API. This resource consists of details about the custom processor
used for this payment attempt.
   */
  custom?: PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsResourceCustomDetails;
  /**
   * The processor used for this payment attempt.
   */
  type: string;
}

export const PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsSchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourceProcessorDetails> = typed<PaymentsPrimitivesPaymentRecordsResourceProcessorDetails>(object({
  get custom() { return optional(PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsResourceCustomDetailsSchema) },
  type: string(),
}));