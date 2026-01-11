import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestDeclineOn } from './PostAccountsRequestDeclineOn';
import { PostAccountsRequestDeclineOnSchema } from './PostAccountsRequestDeclineOn';
import type { PostAccountsRequestStatementDescriptorPrefixKana } from './PostAccountsRequestStatementDescriptorPrefixKana';
import { PostAccountsRequestStatementDescriptorPrefixKanaSchema } from './PostAccountsRequestStatementDescriptorPrefixKana';
/**
 * card_payments_settings_specs
 */
export interface PostAccountsRequestCardPayments {
  /**
   * decline_charge_on_specs
   */
  declineOn?: PostAccountsRequestDeclineOn;
  statementDescriptorPrefix?: string;
  statementDescriptorPrefixKana?: PostAccountsRequestStatementDescriptorPrefixKana;
  statementDescriptorPrefixKanji?: PostAccountsRequestStatementDescriptorPrefixKana;
}

export const PostAccountsRequestCardPaymentsSchema: TypedSchema<PostAccountsRequestCardPayments> = typed<PostAccountsRequestCardPayments>(object({
  get declineOn() { return optional(PostAccountsRequestDeclineOnSchema) },
  statementDescriptorPrefix: optional(string()),
  get statementDescriptorPrefixKana() { return optional(PostAccountsRequestStatementDescriptorPrefixKanaSchema) },
  get statementDescriptorPrefixKanji() { return optional(PostAccountsRequestStatementDescriptorPrefixKanaSchema) },
}));