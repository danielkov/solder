import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_intent_next_action_konbini_lawson
 *
 * 
 */
export interface PaymentIntentNextActionKonbiniLawson {
  /**
   * The confirmation number.
   */
  confirmationNumber?: string;
  /**
   * The payment code.
   */
  paymentCode: string;
}

export const PaymentIntentNextActionKonbiniLawsonSchema: TypedSchema<PaymentIntentNextActionKonbiniLawson> = typed<PaymentIntentNextActionKonbiniLawson>(object({
  confirmationNumber: optional(string()),
  paymentCode: string(),
}));