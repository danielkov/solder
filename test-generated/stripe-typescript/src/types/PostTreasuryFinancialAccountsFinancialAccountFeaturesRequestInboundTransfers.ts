import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTreasuryFinancialAccountsRequestAch } from './PostTreasuryFinancialAccountsRequestAch';
import { PostTreasuryFinancialAccountsRequestAchSchema } from './PostTreasuryFinancialAccountsRequestAch';
/**
 * inbound_transfers
 *
 * Contains settings related to adding funds to a FinancialAccount from another Account with the same owner.
 */
export interface PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestInboundTransfers {
  /**
   * access_with_ach_details
   */
  ach?: PostTreasuryFinancialAccountsRequestAch;
}

export const PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestInboundTransfersSchema: TypedSchema<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestInboundTransfers> = typed<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestInboundTransfers>(object({
  get ach() { return optional(PostTreasuryFinancialAccountsRequestAchSchema) },
}));