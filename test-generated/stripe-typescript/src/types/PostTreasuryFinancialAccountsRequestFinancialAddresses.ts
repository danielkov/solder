import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTreasuryFinancialAccountsRequestAba } from './PostTreasuryFinancialAccountsRequestAba';
import { PostTreasuryFinancialAccountsRequestAbaSchema } from './PostTreasuryFinancialAccountsRequestAba';
/**
 * financial_addresses
 */
export interface PostTreasuryFinancialAccountsRequestFinancialAddresses {
  /**
   * aba_access
   */
  aba?: PostTreasuryFinancialAccountsRequestAba;
}

export const PostTreasuryFinancialAccountsRequestFinancialAddressesSchema: TypedSchema<PostTreasuryFinancialAccountsRequestFinancialAddresses> = typed<PostTreasuryFinancialAccountsRequestFinancialAddresses>(object({
  get aba() { return optional(PostTreasuryFinancialAccountsRequestAbaSchema) },
}));