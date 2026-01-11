import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTreasuryFinancialAccountsRequestAba } from './PostTreasuryFinancialAccountsRequestAba';
import { PostTreasuryFinancialAccountsRequestAbaSchema } from './PostTreasuryFinancialAccountsRequestAba';
/**
 * financial_addresses
 *
 * Contains Features that add FinancialAddresses to the FinancialAccount.
 */
export interface PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestFinancialAddresses {
  /**
   * aba_access
   */
  aba?: PostTreasuryFinancialAccountsRequestAba;
}

export const PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestFinancialAddressesSchema: TypedSchema<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestFinancialAddresses> = typed<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestFinancialAddresses>(object({
  get aba() { return optional(PostTreasuryFinancialAccountsRequestAbaSchema) },
}));