import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountPaymentsSettings
 *
 * 
 */
export interface AccountPaymentsSettings {
  /**
   * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge.
   */
  statementDescriptor?: string;
  /**
   * The Kana variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
   */
  statementDescriptorKana?: string;
  /**
   * The Kanji variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
   */
  statementDescriptorKanji?: string;
}

export const AccountPaymentsSettingsSchema: TypedSchema<AccountPaymentsSettings> = typed<AccountPaymentsSettings>(object({
  statementDescriptor: optional(string()),
  statementDescriptorKana: optional(string()),
  statementDescriptorKanji: optional(string()),
}));