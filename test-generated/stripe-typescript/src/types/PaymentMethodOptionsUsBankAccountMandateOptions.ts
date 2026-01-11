import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_us_bank_account_mandate_options
 *
 * 
 */
export interface PaymentMethodOptionsUsBankAccountMandateOptions {
  /**
   * Mandate collection method
   */
  collectionMethod?: string;
}

export const PaymentMethodOptionsUsBankAccountMandateOptionsSchema: TypedSchema<PaymentMethodOptionsUsBankAccountMandateOptions> = typed<PaymentMethodOptionsUsBankAccountMandateOptions>(object({
  collectionMethod: optional(string()),
}));