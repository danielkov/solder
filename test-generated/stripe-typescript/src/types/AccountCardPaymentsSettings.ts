import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountDeclineChargeOn } from './AccountDeclineChargeOn';
import { AccountDeclineChargeOnSchema } from './AccountDeclineChargeOn';
/**
 * AccountCardPaymentsSettings
 *
 * 
 */
export interface AccountCardPaymentsSettings {
  /**
   * AccountDeclineChargeOn
   *
   * 
   */
  declineOn?: AccountDeclineChargeOn;
  /**
   * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.
   */
  statementDescriptorPrefix?: string;
  /**
   * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kana` specified on the charge. `statement_descriptor_prefix_kana` is useful for maximizing descriptor space for the dynamic portion.
   */
  statementDescriptorPrefixKana?: string;
  /**
   * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kanji` specified on the charge. `statement_descriptor_prefix_kanji` is useful for maximizing descriptor space for the dynamic portion.
   */
  statementDescriptorPrefixKanji?: string;
}

export const AccountCardPaymentsSettingsSchema: TypedSchema<AccountCardPaymentsSettings> = typed<AccountCardPaymentsSettings>(object({
  get declineOn() { return optional(AccountDeclineChargeOnSchema) },
  statementDescriptorPrefix: optional(string()),
  statementDescriptorPrefixKana: optional(string()),
  statementDescriptorPrefixKanji: optional(string()),
}));