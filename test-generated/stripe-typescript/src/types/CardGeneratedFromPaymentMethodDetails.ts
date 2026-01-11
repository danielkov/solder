import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodDetailsCardPresent } from './PaymentMethodDetailsCardPresent';
import { PaymentMethodDetailsCardPresentSchema } from './PaymentMethodDetailsCardPresent';
/**
 * card_generated_from_payment_method_details
 *
 * 
 */
export interface CardGeneratedFromPaymentMethodDetails {
  /**
   * payment_method_details_card_present
   *
   * 
   */
  cardPresent?: PaymentMethodDetailsCardPresent;
  /**
   * The type of payment method transaction-specific details from the transaction that generated this `card` payment method. Always `card_present`.
   */
  type: string;
}

export const CardGeneratedFromPaymentMethodDetailsSchema: TypedSchema<CardGeneratedFromPaymentMethodDetails> = typed<CardGeneratedFromPaymentMethodDetails>(object({
  get cardPresent() { return optional(PaymentMethodDetailsCardPresentSchema) },
  type: string(),
}));