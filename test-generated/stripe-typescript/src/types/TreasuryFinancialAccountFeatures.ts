import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TreasuryFinancialAccountsResourceFinancialAddressesFeatures } from './TreasuryFinancialAccountsResourceFinancialAddressesFeatures';
import { TreasuryFinancialAccountsResourceFinancialAddressesFeaturesSchema } from './TreasuryFinancialAccountsResourceFinancialAddressesFeatures';
import type { TreasuryFinancialAccountsResourceInboundTransfers } from './TreasuryFinancialAccountsResourceInboundTransfers';
import { TreasuryFinancialAccountsResourceInboundTransfersSchema } from './TreasuryFinancialAccountsResourceInboundTransfers';
import type { TreasuryFinancialAccountsResourceOutboundPayments } from './TreasuryFinancialAccountsResourceOutboundPayments';
import { TreasuryFinancialAccountsResourceOutboundPaymentsSchema } from './TreasuryFinancialAccountsResourceOutboundPayments';
import type { TreasuryFinancialAccountsResourceOutboundTransfers } from './TreasuryFinancialAccountsResourceOutboundTransfers';
import { TreasuryFinancialAccountsResourceOutboundTransfersSchema } from './TreasuryFinancialAccountsResourceOutboundTransfers';
import type { TreasuryFinancialAccountsResourceToggleSettings } from './TreasuryFinancialAccountsResourceToggleSettings';
import { TreasuryFinancialAccountsResourceToggleSettingsSchema } from './TreasuryFinancialAccountsResourceToggleSettings';
/**
 * TreasuryFinancialAccountsResourceFinancialAccountFeatures
 *
 * Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`.
Stripe or the platform can control Features via the requested field.
 */
export interface TreasuryFinancialAccountFeatures {
  /**
   * TreasuryFinancialAccountsResourceToggleSettings
   *
   * Toggle settings for enabling/disabling a feature
   */
  cardIssuing?: TreasuryFinancialAccountsResourceToggleSettings;
  /**
   * TreasuryFinancialAccountsResourceToggleSettings
   *
   * Toggle settings for enabling/disabling a feature
   */
  depositInsurance?: TreasuryFinancialAccountsResourceToggleSettings;
  /**
   * TreasuryFinancialAccountsResourceFinancialAddressesFeatures
   *
   * Settings related to Financial Addresses features on a Financial Account
   */
  financialAddresses?: TreasuryFinancialAccountsResourceFinancialAddressesFeatures;
  /**
   * TreasuryFinancialAccountsResourceInboundTransfers
   *
   * InboundTransfers contains inbound transfers features for a FinancialAccount.
   */
  inboundTransfers?: TreasuryFinancialAccountsResourceInboundTransfers;
  /**
   * TreasuryFinancialAccountsResourceToggleSettings
   *
   * Toggle settings for enabling/disabling a feature
   */
  intraStripeFlows?: TreasuryFinancialAccountsResourceToggleSettings;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * TreasuryFinancialAccountsResourceOutboundPayments
   *
   * Settings related to Outbound Payments features on a Financial Account
   */
  outboundPayments?: TreasuryFinancialAccountsResourceOutboundPayments;
  /**
   * TreasuryFinancialAccountsResourceOutboundTransfers
   *
   * OutboundTransfers contains outbound transfers features for a FinancialAccount.
   */
  outboundTransfers?: TreasuryFinancialAccountsResourceOutboundTransfers;
}

export const TreasuryFinancialAccountFeaturesSchema: TypedSchema<TreasuryFinancialAccountFeatures> = typed<TreasuryFinancialAccountFeatures>(object({
  get cardIssuing() { return optional(TreasuryFinancialAccountsResourceToggleSettingsSchema) },
  get depositInsurance() { return optional(TreasuryFinancialAccountsResourceToggleSettingsSchema) },
  get financialAddresses() { return optional(TreasuryFinancialAccountsResourceFinancialAddressesFeaturesSchema) },
  get inboundTransfers() { return optional(TreasuryFinancialAccountsResourceInboundTransfersSchema) },
  get intraStripeFlows() { return optional(TreasuryFinancialAccountsResourceToggleSettingsSchema) },
  object: string(),
  get outboundPayments() { return optional(TreasuryFinancialAccountsResourceOutboundPaymentsSchema) },
  get outboundTransfers() { return optional(TreasuryFinancialAccountsResourceOutboundTransfersSchema) },
}));