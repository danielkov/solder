import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * platform_restrictions
 *
 * The set of functionalities that the platform can restrict on the FinancialAccount.
 */
export interface PostTreasuryFinancialAccountsRequestPlatformRestrictions {
  inboundFlows?: string;
  outboundFlows?: string;
}

export const PostTreasuryFinancialAccountsRequestPlatformRestrictionsSchema: TypedSchema<PostTreasuryFinancialAccountsRequestPlatformRestrictions> = typed<PostTreasuryFinancialAccountsRequestPlatformRestrictions>(object({
  inboundFlows: optional(string()),
  outboundFlows: optional(string()),
}));