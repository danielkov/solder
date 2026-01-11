import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTreasuryFinancialAccountsRequestAch } from './PostTreasuryFinancialAccountsRequestAch';
import { PostTreasuryFinancialAccountsRequestAchSchema } from './PostTreasuryFinancialAccountsRequestAch';
import type { PostTreasuryFinancialAccountsRequestCardIssuing } from './PostTreasuryFinancialAccountsRequestCardIssuing';
import { PostTreasuryFinancialAccountsRequestCardIssuingSchema } from './PostTreasuryFinancialAccountsRequestCardIssuing';
/**
 * outbound_payments
 *
 * Includes Features related to initiating money movement out of the FinancialAccount to someone else's bucket of money.
 */
export interface PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundPayments {
  /**
   * access_with_ach_details
   */
  ach?: PostTreasuryFinancialAccountsRequestAch;
  /**
   * access
   */
  usDomesticWire?: PostTreasuryFinancialAccountsRequestCardIssuing;
}

export const PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundPaymentsSchema: TypedSchema<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundPayments> = typed<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundPayments>(object({
  get ach() { return optional(PostTreasuryFinancialAccountsRequestAchSchema) },
  get usDomesticWire() { return optional(PostTreasuryFinancialAccountsRequestCardIssuingSchema) },
}));