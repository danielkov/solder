import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_intent_next_action_konbini_seicomart
 *
 * 
 */
export interface PaymentIntentNextActionKonbiniSeicomart {
  /**
   * The confirmation number.
   */
  confirmationNumber?: string;
  /**
   * The payment code.
   */
  paymentCode: string;
}

export const PaymentIntentNextActionKonbiniSeicomartSchema: TypedSchema<PaymentIntentNextActionKonbiniSeicomart> = typed<PaymentIntentNextActionKonbiniSeicomart>(object({
  confirmationNumber: optional(string()),
  paymentCode: string(),
}));