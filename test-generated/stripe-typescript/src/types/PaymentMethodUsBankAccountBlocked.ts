import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_us_bank_account_blocked
 *
 * 
 */
export interface PaymentMethodUsBankAccountBlocked {
  /**
   * The ACH network code that resulted in this block.
   */
  networkCode?: string;
  /**
   * The reason why this PaymentMethod's fingerprint has been blocked
   */
  reason?: string;
}

export const PaymentMethodUsBankAccountBlockedSchema: TypedSchema<PaymentMethodUsBankAccountBlocked> = typed<PaymentMethodUsBankAccountBlocked>(object({
  networkCode: optional(string()),
  reason: optional(string()),
}));