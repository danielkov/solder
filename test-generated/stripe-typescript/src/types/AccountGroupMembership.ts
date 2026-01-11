import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountGroupMembership
 *
 * 
 */
export interface AccountGroupMembership {
  /**
   * The group the account is in to determine their payments pricing, and null if the account is on customized pricing. [See the Platform pricing tool documentation](https://stripe.com/docs/connect/platform-pricing-tools) for details.
   */
  paymentsPricing?: string;
}

export const AccountGroupMembershipSchema: TypedSchema<AccountGroupMembership> = typed<AccountGroupMembership>(object({
  paymentsPricing: optional(string()),
}));