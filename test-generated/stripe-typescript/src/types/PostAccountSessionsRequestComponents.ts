import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountSessionsRequestAccountManagement } from './PostAccountSessionsRequestAccountManagement';
import { PostAccountSessionsRequestAccountManagementSchema } from './PostAccountSessionsRequestAccountManagement';
import type { PostAccountSessionsRequestBalances } from './PostAccountSessionsRequestBalances';
import { PostAccountSessionsRequestBalancesSchema } from './PostAccountSessionsRequestBalances';
import type { PostAccountSessionsRequestDisputesList } from './PostAccountSessionsRequestDisputesList';
import { PostAccountSessionsRequestDisputesListSchema } from './PostAccountSessionsRequestDisputesList';
import type { PostAccountSessionsRequestDocuments } from './PostAccountSessionsRequestDocuments';
import { PostAccountSessionsRequestDocumentsSchema } from './PostAccountSessionsRequestDocuments';
import type { PostAccountSessionsRequestFinancialAccount } from './PostAccountSessionsRequestFinancialAccount';
import { PostAccountSessionsRequestFinancialAccountSchema } from './PostAccountSessionsRequestFinancialAccount';
import type { PostAccountSessionsRequestFinancialAccountTransactions } from './PostAccountSessionsRequestFinancialAccountTransactions';
import { PostAccountSessionsRequestFinancialAccountTransactionsSchema } from './PostAccountSessionsRequestFinancialAccountTransactions';
import type { PostAccountSessionsRequestInstantPayoutsPromotion } from './PostAccountSessionsRequestInstantPayoutsPromotion';
import { PostAccountSessionsRequestInstantPayoutsPromotionSchema } from './PostAccountSessionsRequestInstantPayoutsPromotion';
import type { PostAccountSessionsRequestIssuingCard } from './PostAccountSessionsRequestIssuingCard';
import { PostAccountSessionsRequestIssuingCardSchema } from './PostAccountSessionsRequestIssuingCard';
import type { PostAccountSessionsRequestIssuingCardsList } from './PostAccountSessionsRequestIssuingCardsList';
import { PostAccountSessionsRequestIssuingCardsListSchema } from './PostAccountSessionsRequestIssuingCardsList';
import type { PostAccountSessionsRequestPaymentDetails } from './PostAccountSessionsRequestPaymentDetails';
import { PostAccountSessionsRequestPaymentDetailsSchema } from './PostAccountSessionsRequestPaymentDetails';
import type { PostAccountSessionsRequestPaymentDisputes } from './PostAccountSessionsRequestPaymentDisputes';
import { PostAccountSessionsRequestPaymentDisputesSchema } from './PostAccountSessionsRequestPaymentDisputes';
/**
 * account_session_create_components_param
 *
 * Each key of the dictionary represents an embedded component, and each embedded component maps to its configuration (e.g. whether it has been enabled or not).
 */
export interface PostAccountSessionsRequestComponents {
  /**
   * account_config_param
   */
  accountManagement?: PostAccountSessionsRequestAccountManagement;
  /**
   * account_config_param
   */
  accountOnboarding?: PostAccountSessionsRequestAccountManagement;
  /**
   * payouts_config_param
   */
  balances?: PostAccountSessionsRequestBalances;
  /**
   * disputes_list_config_param
   */
  disputesList?: PostAccountSessionsRequestDisputesList;
  /**
   * base_config_param
   */
  documents?: PostAccountSessionsRequestDocuments;
  /**
   * financial_account_config_param
   */
  financialAccount?: PostAccountSessionsRequestFinancialAccount;
  /**
   * financial_account_transactions_config_param
   */
  financialAccountTransactions?: PostAccountSessionsRequestFinancialAccountTransactions;
  /**
   * instant_payouts_promotion_config_param
   */
  instantPayoutsPromotion?: PostAccountSessionsRequestInstantPayoutsPromotion;
  /**
   * issuing_card_config_param
   */
  issuingCard?: PostAccountSessionsRequestIssuingCard;
  /**
   * issuing_cards_list_config_param
   */
  issuingCardsList?: PostAccountSessionsRequestIssuingCardsList;
  /**
   * account_config_param
   */
  notificationBanner?: PostAccountSessionsRequestAccountManagement;
  /**
   * payments_config_param
   */
  paymentDetails?: PostAccountSessionsRequestPaymentDetails;
  /**
   * payment_disputes_config_param
   */
  paymentDisputes?: PostAccountSessionsRequestPaymentDisputes;
  /**
   * payments_config_param
   */
  payments?: PostAccountSessionsRequestPaymentDetails;
  /**
   * base_config_param
   */
  payoutDetails?: PostAccountSessionsRequestDocuments;
  /**
   * payouts_config_param
   */
  payouts?: PostAccountSessionsRequestBalances;
  /**
   * base_config_param
   */
  payoutsList?: PostAccountSessionsRequestDocuments;
  /**
   * base_config_param
   */
  taxRegistrations?: PostAccountSessionsRequestDocuments;
  /**
   * base_config_param
   */
  taxSettings?: PostAccountSessionsRequestDocuments;
}

export const PostAccountSessionsRequestComponentsSchema: TypedSchema<PostAccountSessionsRequestComponents> = typed<PostAccountSessionsRequestComponents>(object({
  get accountManagement() { return optional(PostAccountSessionsRequestAccountManagementSchema) },
  get accountOnboarding() { return optional(PostAccountSessionsRequestAccountManagementSchema) },
  get balances() { return optional(PostAccountSessionsRequestBalancesSchema) },
  get disputesList() { return optional(PostAccountSessionsRequestDisputesListSchema) },
  get documents() { return optional(PostAccountSessionsRequestDocumentsSchema) },
  get financialAccount() { return optional(PostAccountSessionsRequestFinancialAccountSchema) },
  get financialAccountTransactions() { return optional(PostAccountSessionsRequestFinancialAccountTransactionsSchema) },
  get instantPayoutsPromotion() { return optional(PostAccountSessionsRequestInstantPayoutsPromotionSchema) },
  get issuingCard() { return optional(PostAccountSessionsRequestIssuingCardSchema) },
  get issuingCardsList() { return optional(PostAccountSessionsRequestIssuingCardsListSchema) },
  get notificationBanner() { return optional(PostAccountSessionsRequestAccountManagementSchema) },
  get paymentDetails() { return optional(PostAccountSessionsRequestPaymentDetailsSchema) },
  get paymentDisputes() { return optional(PostAccountSessionsRequestPaymentDisputesSchema) },
  get payments() { return optional(PostAccountSessionsRequestPaymentDetailsSchema) },
  get payoutDetails() { return optional(PostAccountSessionsRequestDocumentsSchema) },
  get payouts() { return optional(PostAccountSessionsRequestBalancesSchema) },
  get payoutsList() { return optional(PostAccountSessionsRequestDocumentsSchema) },
  get taxRegistrations() { return optional(PostAccountSessionsRequestDocumentsSchema) },
  get taxSettings() { return optional(PostAccountSessionsRequestDocumentsSchema) },
}));