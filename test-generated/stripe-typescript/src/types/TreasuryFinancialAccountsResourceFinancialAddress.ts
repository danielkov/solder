import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TreasuryFinancialAccountsResourceAbaRecord } from './TreasuryFinancialAccountsResourceAbaRecord';
import { TreasuryFinancialAccountsResourceAbaRecordSchema } from './TreasuryFinancialAccountsResourceAbaRecord';
/**
 * TreasuryFinancialAccountsResourceFinancialAddress
 *
 * FinancialAddresses contain identifying information that resolves to a FinancialAccount.
 */
export interface TreasuryFinancialAccountsResourceFinancialAddress {
  /**
   * TreasuryFinancialAccountsResourceABARecord
   *
   * ABA Records contain U.S. bank account details per the ABA format.
   */
  aba?: TreasuryFinancialAccountsResourceAbaRecord;
  /**
   * The list of networks that the address supports
   */
  supportedNetworks?: Array<string>;
  /**
   * The type of financial address
   */
  type: string;
}

export const TreasuryFinancialAccountsResourceFinancialAddressSchema: TypedSchema<TreasuryFinancialAccountsResourceFinancialAddress> = typed<TreasuryFinancialAccountsResourceFinancialAddress>(object({
  get aba() { return optional(TreasuryFinancialAccountsResourceAbaRecordSchema) },
  supportedNetworks: optional(array(string())),
  type: string(),
}));