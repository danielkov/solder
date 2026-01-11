import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentIntentNextActionDisplayMultibancoDetails
 *
 * 
 */
export interface PaymentIntentNextActionDisplayMultibancoDetails {
  /**
   * Entity number associated with this Multibanco payment.
   */
  entity?: string;
  /**
   * The timestamp at which the Multibanco voucher expires.
   */
  expiresAt?: number;
  /**
   * The URL for the hosted Multibanco voucher page, which allows customers to view a Multibanco voucher.
   */
  hostedVoucherUrl?: string;
  /**
   * Reference number associated with this Multibanco payment.
   */
  reference?: string;
}

export const PaymentIntentNextActionDisplayMultibancoDetailsSchema: TypedSchema<PaymentIntentNextActionDisplayMultibancoDetails> = typed<PaymentIntentNextActionDisplayMultibancoDetails>(object({
  entity: optional(string()),
  expiresAt: optional(number()),
  hostedVoucherUrl: optional(string()),
  reference: optional(string()),
}));