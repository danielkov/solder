import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountSepaDebitPaymentsSettings
 *
 * 
 */
export interface AccountSepaDebitPaymentsSettings {
  /**
   * SEPA creditor identifier that identifies the company making the payment.
   */
  creditorId?: string;
}

export const AccountSepaDebitPaymentsSettingsSchema: TypedSchema<AccountSepaDebitPaymentsSettings> = typed<AccountSepaDebitPaymentsSettings>(object({
  creditorId: optional(string()),
}));