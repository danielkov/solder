import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTreasuryFinancialAccountsRequestAch } from './PostTreasuryFinancialAccountsRequestAch';
import { PostTreasuryFinancialAccountsRequestAchSchema } from './PostTreasuryFinancialAccountsRequestAch';
import type { PostTreasuryFinancialAccountsRequestCardIssuing } from './PostTreasuryFinancialAccountsRequestCardIssuing';
import { PostTreasuryFinancialAccountsRequestCardIssuingSchema } from './PostTreasuryFinancialAccountsRequestCardIssuing';
/**
 * outbound_transfers
 */
export interface PostTreasuryFinancialAccountsRequestOutboundTransfers {
  /**
   * access_with_ach_details
   */
  ach?: PostTreasuryFinancialAccountsRequestAch;
  /**
   * access
   */
  usDomesticWire?: PostTreasuryFinancialAccountsRequestCardIssuing;
}

export const PostTreasuryFinancialAccountsRequestOutboundTransfersSchema: TypedSchema<PostTreasuryFinancialAccountsRequestOutboundTransfers> = typed<PostTreasuryFinancialAccountsRequestOutboundTransfers>(object({
  get ach() { return optional(PostTreasuryFinancialAccountsRequestAchSchema) },
  get usDomesticWire() { return optional(PostTreasuryFinancialAccountsRequestCardIssuingSchema) },
}));