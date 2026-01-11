import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentIntentCardProcessing } from './PaymentIntentCardProcessing';
import { PaymentIntentCardProcessingSchema } from './PaymentIntentCardProcessing';
/**
 * PaymentIntentProcessing
 *
 * 
 */
export interface PaymentIntentProcessing {
  /**
   * PaymentIntentCardProcessing
   *
   * 
   */
  card?: PaymentIntentCardProcessing;
  /**
   * Type of the payment method for which payment is in `processing` state, one of `card`.
   */
  type: string;
}

export const PaymentIntentProcessingSchema: TypedSchema<PaymentIntentProcessing> = typed<PaymentIntentProcessing>(object({
  get card() { return optional(PaymentIntentCardProcessingSchema) },
  type: string(),
}));