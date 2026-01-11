import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_intent_next_action_boleto
 *
 * 
 */
export interface PaymentIntentNextActionBoleto {
  /**
   * The timestamp after which the boleto expires.
   */
  expiresAt?: number;
  /**
   * The URL to the hosted boleto voucher page, which allows customers to view the boleto voucher.
   */
  hostedVoucherUrl?: string;
  /**
   * The boleto number.
   */
  number?: string;
  /**
   * The URL to the downloadable boleto voucher PDF.
   */
  pdf?: string;
}

export const PaymentIntentNextActionBoletoSchema: TypedSchema<PaymentIntentNextActionBoleto> = typed<PaymentIntentNextActionBoleto>(object({
  expiresAt: optional(number()),
  hostedVoucherUrl: optional(string()),
  number: optional(string()),
  pdf: optional(string()),
}));