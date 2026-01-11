import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTreasuryFinancialAccountsRequestAch } from './PostTreasuryFinancialAccountsRequestAch';
import { PostTreasuryFinancialAccountsRequestAchSchema } from './PostTreasuryFinancialAccountsRequestAch';
import type { PostTreasuryFinancialAccountsRequestCardIssuing } from './PostTreasuryFinancialAccountsRequestCardIssuing';
import { PostTreasuryFinancialAccountsRequestCardIssuingSchema } from './PostTreasuryFinancialAccountsRequestCardIssuing';
/**
 * outbound_transfers
 *
 * Contains a Feature and settings related to moving money out of the FinancialAccount into another Account with the same owner.
 */
export interface PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundTransfers {
  /**
   * access_with_ach_details
   */
  ach?: PostTreasuryFinancialAccountsRequestAch;
  /**
   * access
   */
  usDomesticWire?: PostTreasuryFinancialAccountsRequestCardIssuing;
}

export const PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundTransfersSchema: TypedSchema<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundTransfers> = typed<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundTransfers>(object({
  get ach() { return optional(PostTreasuryFinancialAccountsRequestAchSchema) },
  get usDomesticWire() { return optional(PostTreasuryFinancialAccountsRequestCardIssuingSchema) },
}));