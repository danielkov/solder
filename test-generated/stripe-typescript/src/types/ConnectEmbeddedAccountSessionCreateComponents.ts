import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { ConnectEmbeddedAccountConfigClaim } from './ConnectEmbeddedAccountConfigClaim';
import { ConnectEmbeddedAccountConfigClaimSchema } from './ConnectEmbeddedAccountConfigClaim';
import type { ConnectEmbeddedBaseConfigClaim } from './ConnectEmbeddedBaseConfigClaim';
import { ConnectEmbeddedBaseConfigClaimSchema } from './ConnectEmbeddedBaseConfigClaim';
import type { ConnectEmbeddedDisputesListConfig } from './ConnectEmbeddedDisputesListConfig';
import { ConnectEmbeddedDisputesListConfigSchema } from './ConnectEmbeddedDisputesListConfig';
import type { ConnectEmbeddedFinancialAccountConfigClaim } from './ConnectEmbeddedFinancialAccountConfigClaim';
import { ConnectEmbeddedFinancialAccountConfigClaimSchema } from './ConnectEmbeddedFinancialAccountConfigClaim';
import type { ConnectEmbeddedFinancialAccountTransactionsConfigClaim } from './ConnectEmbeddedFinancialAccountTransactionsConfigClaim';
import { ConnectEmbeddedFinancialAccountTransactionsConfigClaimSchema } from './ConnectEmbeddedFinancialAccountTransactionsConfigClaim';
import type { ConnectEmbeddedInstantPayoutsPromotionConfig } from './ConnectEmbeddedInstantPayoutsPromotionConfig';
import { ConnectEmbeddedInstantPayoutsPromotionConfigSchema } from './ConnectEmbeddedInstantPayoutsPromotionConfig';
import type { ConnectEmbeddedIssuingCardConfigClaim } from './ConnectEmbeddedIssuingCardConfigClaim';
import { ConnectEmbeddedIssuingCardConfigClaimSchema } from './ConnectEmbeddedIssuingCardConfigClaim';
import type { ConnectEmbeddedIssuingCardsListConfigClaim } from './ConnectEmbeddedIssuingCardsListConfigClaim';
import { ConnectEmbeddedIssuingCardsListConfigClaimSchema } from './ConnectEmbeddedIssuingCardsListConfigClaim';
import type { ConnectEmbeddedPaymentDisputesConfig } from './ConnectEmbeddedPaymentDisputesConfig';
import { ConnectEmbeddedPaymentDisputesConfigSchema } from './ConnectEmbeddedPaymentDisputesConfig';
import type { ConnectEmbeddedPaymentsConfigClaim } from './ConnectEmbeddedPaymentsConfigClaim';
import { ConnectEmbeddedPaymentsConfigClaimSchema } from './ConnectEmbeddedPaymentsConfigClaim';
import type { ConnectEmbeddedPayoutsConfig } from './ConnectEmbeddedPayoutsConfig';
import { ConnectEmbeddedPayoutsConfigSchema } from './ConnectEmbeddedPayoutsConfig';
/**
 * ConnectEmbeddedAccountSessionCreateComponents
 *
 * 
 */
export interface ConnectEmbeddedAccountSessionCreateComponents {
  /**
   * ConnectEmbeddedAccountConfigClaim
   *
   * 
   */
  accountManagement: ConnectEmbeddedAccountConfigClaim;
  /**
   * ConnectEmbeddedAccountConfigClaim
   *
   * 
   */
  accountOnboarding: ConnectEmbeddedAccountConfigClaim;
  /**
   * ConnectEmbeddedPayoutsConfig
   *
   * 
   */
  balances: ConnectEmbeddedPayoutsConfig;
  /**
   * ConnectEmbeddedDisputesListConfig
   *
   * 
   */
  disputesList: ConnectEmbeddedDisputesListConfig;
  /**
   * ConnectEmbeddedBaseConfigClaim
   *
   * 
   */
  documents: ConnectEmbeddedBaseConfigClaim;
  /**
   * ConnectEmbeddedFinancialAccountConfigClaim
   *
   * 
   */
  financialAccount: ConnectEmbeddedFinancialAccountConfigClaim;
  /**
   * ConnectEmbeddedFinancialAccountTransactionsConfigClaim
   *
   * 
   */
  financialAccountTransactions: ConnectEmbeddedFinancialAccountTransactionsConfigClaim;
  /**
   * ConnectEmbeddedInstantPayoutsPromotionConfig
   *
   * 
   */
  instantPayoutsPromotion: ConnectEmbeddedInstantPayoutsPromotionConfig;
  /**
   * ConnectEmbeddedIssuingCardConfigClaim
   *
   * 
   */
  issuingCard: ConnectEmbeddedIssuingCardConfigClaim;
  /**
   * ConnectEmbeddedIssuingCardsListConfigClaim
   *
   * 
   */
  issuingCardsList: ConnectEmbeddedIssuingCardsListConfigClaim;
  /**
   * ConnectEmbeddedAccountConfigClaim
   *
   * 
   */
  notificationBanner: ConnectEmbeddedAccountConfigClaim;
  /**
   * ConnectEmbeddedPaymentsConfigClaim
   *
   * 
   */
  paymentDetails: ConnectEmbeddedPaymentsConfigClaim;
  /**
   * ConnectEmbeddedPaymentDisputesConfig
   *
   * 
   */
  paymentDisputes: ConnectEmbeddedPaymentDisputesConfig;
  /**
   * ConnectEmbeddedPaymentsConfigClaim
   *
   * 
   */
  payments: ConnectEmbeddedPaymentsConfigClaim;
  /**
   * ConnectEmbeddedBaseConfigClaim
   *
   * 
   */
  payoutDetails: ConnectEmbeddedBaseConfigClaim;
  /**
   * ConnectEmbeddedPayoutsConfig
   *
   * 
   */
  payouts: ConnectEmbeddedPayoutsConfig;
  /**
   * ConnectEmbeddedBaseConfigClaim
   *
   * 
   */
  payoutsList: ConnectEmbeddedBaseConfigClaim;
  /**
   * ConnectEmbeddedBaseConfigClaim
   *
   * 
   */
  taxRegistrations: ConnectEmbeddedBaseConfigClaim;
  /**
   * ConnectEmbeddedBaseConfigClaim
   *
   * 
   */
  taxSettings: ConnectEmbeddedBaseConfigClaim;
}

export const ConnectEmbeddedAccountSessionCreateComponentsSchema: TypedSchema<ConnectEmbeddedAccountSessionCreateComponents> = typed<ConnectEmbeddedAccountSessionCreateComponents>(object({
  accountManagement: ConnectEmbeddedAccountConfigClaimSchema,
  accountOnboarding: ConnectEmbeddedAccountConfigClaimSchema,
  balances: ConnectEmbeddedPayoutsConfigSchema,
  disputesList: ConnectEmbeddedDisputesListConfigSchema,
  documents: ConnectEmbeddedBaseConfigClaimSchema,
  financialAccount: ConnectEmbeddedFinancialAccountConfigClaimSchema,
  financialAccountTransactions: ConnectEmbeddedFinancialAccountTransactionsConfigClaimSchema,
  instantPayoutsPromotion: ConnectEmbeddedInstantPayoutsPromotionConfigSchema,
  issuingCard: ConnectEmbeddedIssuingCardConfigClaimSchema,
  issuingCardsList: ConnectEmbeddedIssuingCardsListConfigClaimSchema,
  notificationBanner: ConnectEmbeddedAccountConfigClaimSchema,
  paymentDetails: ConnectEmbeddedPaymentsConfigClaimSchema,
  paymentDisputes: ConnectEmbeddedPaymentDisputesConfigSchema,
  payments: ConnectEmbeddedPaymentsConfigClaimSchema,
  payoutDetails: ConnectEmbeddedBaseConfigClaimSchema,
  payouts: ConnectEmbeddedPayoutsConfigSchema,
  payoutsList: ConnectEmbeddedBaseConfigClaimSchema,
  taxRegistrations: ConnectEmbeddedBaseConfigClaimSchema,
  taxSettings: ConnectEmbeddedBaseConfigClaimSchema,
}));