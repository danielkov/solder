import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTreasuryFinancialAccountsRequestCardIssuing } from './PostTreasuryFinancialAccountsRequestCardIssuing';
import { PostTreasuryFinancialAccountsRequestCardIssuingSchema } from './PostTreasuryFinancialAccountsRequestCardIssuing';
import type { PostTreasuryFinancialAccountsRequestFinancialAddresses } from './PostTreasuryFinancialAccountsRequestFinancialAddresses';
import { PostTreasuryFinancialAccountsRequestFinancialAddressesSchema } from './PostTreasuryFinancialAccountsRequestFinancialAddresses';
import type { PostTreasuryFinancialAccountsRequestInboundTransfers } from './PostTreasuryFinancialAccountsRequestInboundTransfers';
import { PostTreasuryFinancialAccountsRequestInboundTransfersSchema } from './PostTreasuryFinancialAccountsRequestInboundTransfers';
import type { PostTreasuryFinancialAccountsRequestOutboundPayments } from './PostTreasuryFinancialAccountsRequestOutboundPayments';
import { PostTreasuryFinancialAccountsRequestOutboundPaymentsSchema } from './PostTreasuryFinancialAccountsRequestOutboundPayments';
import type { PostTreasuryFinancialAccountsRequestOutboundTransfers } from './PostTreasuryFinancialAccountsRequestOutboundTransfers';
import { PostTreasuryFinancialAccountsRequestOutboundTransfersSchema } from './PostTreasuryFinancialAccountsRequestOutboundTransfers';
/**
 * feature_access
 *
 * Encodes whether a FinancialAccount has access to a particular feature. Stripe or the platform can control features via the requested field.
 */
export interface PostTreasuryFinancialAccountsRequestFeatures {
  /**
   * access
   */
  cardIssuing?: PostTreasuryFinancialAccountsRequestCardIssuing;
  /**
   * access
   */
  depositInsurance?: PostTreasuryFinancialAccountsRequestCardIssuing;
  /**
   * financial_addresses
   */
  financialAddresses?: PostTreasuryFinancialAccountsRequestFinancialAddresses;
  /**
   * inbound_transfers
   */
  inboundTransfers?: PostTreasuryFinancialAccountsRequestInboundTransfers;
  /**
   * access
   */
  intraStripeFlows?: PostTreasuryFinancialAccountsRequestCardIssuing;
  /**
   * outbound_payments
   */
  outboundPayments?: PostTreasuryFinancialAccountsRequestOutboundPayments;
  /**
   * outbound_transfers
   */
  outboundTransfers?: PostTreasuryFinancialAccountsRequestOutboundTransfers;
}

export const PostTreasuryFinancialAccountsRequestFeaturesSchema: TypedSchema<PostTreasuryFinancialAccountsRequestFeatures> = typed<PostTreasuryFinancialAccountsRequestFeatures>(object({
  get cardIssuing() { return optional(PostTreasuryFinancialAccountsRequestCardIssuingSchema) },
  get depositInsurance() { return optional(PostTreasuryFinancialAccountsRequestCardIssuingSchema) },
  get financialAddresses() { return optional(PostTreasuryFinancialAccountsRequestFinancialAddressesSchema) },
  get inboundTransfers() { return optional(PostTreasuryFinancialAccountsRequestInboundTransfersSchema) },
  get intraStripeFlows() { return optional(PostTreasuryFinancialAccountsRequestCardIssuingSchema) },
  get outboundPayments() { return optional(PostTreasuryFinancialAccountsRequestOutboundPaymentsSchema) },
  get outboundTransfers() { return optional(PostTreasuryFinancialAccountsRequestOutboundTransfersSchema) },
}));