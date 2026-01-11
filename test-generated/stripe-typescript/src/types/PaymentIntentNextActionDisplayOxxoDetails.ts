import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentIntentNextActionDisplayOxxoDetails
 *
 * 
 */
export interface PaymentIntentNextActionDisplayOxxoDetails {
  /**
   * The timestamp after which the OXXO voucher expires.
   */
  expiresAfter?: number;
  /**
   * The URL for the hosted OXXO voucher page, which allows customers to view and print an OXXO voucher.
   */
  hostedVoucherUrl?: string;
  /**
   * OXXO reference number.
   */
  number?: string;
}

export const PaymentIntentNextActionDisplayOxxoDetailsSchema: TypedSchema<PaymentIntentNextActionDisplayOxxoDetails> = typed<PaymentIntentNextActionDisplayOxxoDetails>(object({
  expiresAfter: optional(number()),
  hostedVoucherUrl: optional(string()),
  number: optional(string()),
}));