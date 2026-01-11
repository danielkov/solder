import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestCardIssuing } from './PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestCardIssuing';
import { PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestCardIssuingSchema } from './PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestCardIssuing';
import type { PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestDepositInsurance } from './PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestDepositInsurance';
import { PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestDepositInsuranceSchema } from './PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestDepositInsurance';
import type { PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestFinancialAddresses } from './PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestFinancialAddresses';
import { PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestFinancialAddressesSchema } from './PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestFinancialAddresses';
import type { PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestInboundTransfers } from './PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestInboundTransfers';
import { PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestInboundTransfersSchema } from './PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestInboundTransfers';
import type { PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestIntraStripeFlows } from './PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestIntraStripeFlows';
import { PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestIntraStripeFlowsSchema } from './PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestIntraStripeFlows';
import type { PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundPayments } from './PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundPayments';
import { PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundPaymentsSchema } from './PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundPayments';
import type { PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundTransfers } from './PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundTransfers';
import { PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundTransfersSchema } from './PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundTransfers';
export interface PostTreasuryFinancialAccountsFinancialAccountFeaturesRequest {
  /**
   * access
   *
   * Encodes the FinancialAccount's ability to be used with the Issuing product, including attaching cards to and drawing funds from the FinancialAccount.
   */
  cardIssuing?: PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestCardIssuing;
  /**
   * access
   *
   * Represents whether this FinancialAccount is eligible for deposit insurance. Various factors determine the insurance amount.
   */
  depositInsurance?: PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestDepositInsurance;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * financial_addresses
   *
   * Contains Features that add FinancialAddresses to the FinancialAccount.
   */
  financialAddresses?: PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestFinancialAddresses;
  /**
   * inbound_transfers
   *
   * Contains settings related to adding funds to a FinancialAccount from another Account with the same owner.
   */
  inboundTransfers?: PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestInboundTransfers;
  /**
   * access
   *
   * Represents the ability for the FinancialAccount to send money to, or receive money from other FinancialAccounts (for example, via OutboundPayment).
   */
  intraStripeFlows?: PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestIntraStripeFlows;
  /**
   * outbound_payments
   *
   * Includes Features related to initiating money movement out of the FinancialAccount to someone else's bucket of money.
   */
  outboundPayments?: PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundPayments;
  /**
   * outbound_transfers
   *
   * Contains a Feature and settings related to moving money out of the FinancialAccount into another Account with the same owner.
   */
  outboundTransfers?: PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundTransfers;
}

export const PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestSchema: TypedSchema<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequest> = typed<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequest>(object({
  get cardIssuing() { return optional(PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestCardIssuingSchema) },
  get depositInsurance() { return optional(PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestDepositInsuranceSchema) },
  expand: optional(array(string())),
  get financialAddresses() { return optional(PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestFinancialAddressesSchema) },
  get inboundTransfers() { return optional(PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestInboundTransfersSchema) },
  get intraStripeFlows() { return optional(PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestIntraStripeFlowsSchema) },
  get outboundPayments() { return optional(PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundPaymentsSchema) },
  get outboundTransfers() { return optional(PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundTransfersSchema) },
}));