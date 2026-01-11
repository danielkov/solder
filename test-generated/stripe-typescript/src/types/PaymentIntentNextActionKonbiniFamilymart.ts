import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_intent_next_action_konbini_familymart
 *
 * 
 */
export interface PaymentIntentNextActionKonbiniFamilymart {
  /**
   * The confirmation number.
   */
  confirmationNumber?: string;
  /**
   * The payment code.
   */
  paymentCode: string;
}

export const PaymentIntentNextActionKonbiniFamilymartSchema: TypedSchema<PaymentIntentNextActionKonbiniFamilymart> = typed<PaymentIntentNextActionKonbiniFamilymart>(object({
  confirmationNumber: optional(string()),
  paymentCode: string(),
}));