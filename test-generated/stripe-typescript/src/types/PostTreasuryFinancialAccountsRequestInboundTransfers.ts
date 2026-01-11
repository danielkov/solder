import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTreasuryFinancialAccountsRequestAch } from './PostTreasuryFinancialAccountsRequestAch';
import { PostTreasuryFinancialAccountsRequestAchSchema } from './PostTreasuryFinancialAccountsRequestAch';
/**
 * inbound_transfers
 */
export interface PostTreasuryFinancialAccountsRequestInboundTransfers {
  /**
   * access_with_ach_details
   */
  ach?: PostTreasuryFinancialAccountsRequestAch;
}

export const PostTreasuryFinancialAccountsRequestInboundTransfersSchema: TypedSchema<PostTreasuryFinancialAccountsRequestInboundTransfers> = typed<PostTreasuryFinancialAccountsRequestInboundTransfers>(object({
  get ach() { return optional(PostTreasuryFinancialAccountsRequestAchSchema) },
}));