import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryFinancialAccountsResourcePlatformRestrictions
 *
 * Restrictions that a Connect Platform has placed on this FinancialAccount.
 */
export interface TreasuryFinancialAccountsResourcePlatformRestrictions {
  /**
   * Restricts all inbound money movement.
   */
  inboundFlows?: string;
  /**
   * Restricts all outbound money movement.
   */
  outboundFlows?: string;
}

export const TreasuryFinancialAccountsResourcePlatformRestrictionsSchema: TypedSchema<TreasuryFinancialAccountsResourcePlatformRestrictions> = typed<TreasuryFinancialAccountsResourcePlatformRestrictions>(object({
  inboundFlows: optional(string()),
  outboundFlows: optional(string()),
}));