import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryFinancialAccountsResourceClosedStatusDetails
 *
 * 
 */
export interface TreasuryFinancialAccountsResourceClosedStatusDetails {
  /**
   * The array that contains reasons for a FinancialAccount closure.
   */
  reasons: Array<string>;
}

export const TreasuryFinancialAccountsResourceClosedStatusDetailsSchema: TypedSchema<TreasuryFinancialAccountsResourceClosedStatusDetails> = typed<TreasuryFinancialAccountsResourceClosedStatusDetails>(object({
  reasons: array(string()),
}));