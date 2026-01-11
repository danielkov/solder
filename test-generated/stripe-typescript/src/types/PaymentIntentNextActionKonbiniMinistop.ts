import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_intent_next_action_konbini_ministop
 *
 * 
 */
export interface PaymentIntentNextActionKonbiniMinistop {
  /**
   * The confirmation number.
   */
  confirmationNumber?: string;
  /**
   * The payment code.
   */
  paymentCode: string;
}

export const PaymentIntentNextActionKonbiniMinistopSchema: TypedSchema<PaymentIntentNextActionKonbiniMinistop> = typed<PaymentIntentNextActionKonbiniMinistop>(object({
  confirmationNumber: optional(string()),
  paymentCode: string(),
}));