import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { TreasuryFinancialAccountsResourceClosedStatusDetails } from './TreasuryFinancialAccountsResourceClosedStatusDetails';
import { TreasuryFinancialAccountsResourceClosedStatusDetailsSchema } from './TreasuryFinancialAccountsResourceClosedStatusDetails';
/**
 * TreasuryFinancialAccountsResourceStatusDetails
 *
 * 
 */
export interface TreasuryFinancialAccountsResourceStatusDetails {
  /**
   * Details related to the closure of this FinancialAccount
   */
  closed?: TreasuryFinancialAccountsResourceClosedStatusDetails;
}

export const TreasuryFinancialAccountsResourceStatusDetailsSchema: TypedSchema<TreasuryFinancialAccountsResourceStatusDetails> = typed<TreasuryFinancialAccountsResourceStatusDetails>(object({
  get closed() { return optional(TreasuryFinancialAccountsResourceClosedStatusDetailsSchema) },
}));