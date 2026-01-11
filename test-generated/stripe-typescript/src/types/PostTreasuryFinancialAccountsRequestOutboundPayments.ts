import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTreasuryFinancialAccountsRequestAch } from './PostTreasuryFinancialAccountsRequestAch';
import { PostTreasuryFinancialAccountsRequestAchSchema } from './PostTreasuryFinancialAccountsRequestAch';
import type { PostTreasuryFinancialAccountsRequestCardIssuing } from './PostTreasuryFinancialAccountsRequestCardIssuing';
import { PostTreasuryFinancialAccountsRequestCardIssuingSchema } from './PostTreasuryFinancialAccountsRequestCardIssuing';
/**
 * outbound_payments
 */
export interface PostTreasuryFinancialAccountsRequestOutboundPayments {
  /**
   * access_with_ach_details
   */
  ach?: PostTreasuryFinancialAccountsRequestAch;
  /**
   * access
   */
  usDomesticWire?: PostTreasuryFinancialAccountsRequestCardIssuing;
}

export const PostTreasuryFinancialAccountsRequestOutboundPaymentsSchema: TypedSchema<PostTreasuryFinancialAccountsRequestOutboundPayments> = typed<PostTreasuryFinancialAccountsRequestOutboundPayments>(object({
  get ach() { return optional(PostTreasuryFinancialAccountsRequestAchSchema) },
  get usDomesticWire() { return optional(PostTreasuryFinancialAccountsRequestCardIssuingSchema) },
}));