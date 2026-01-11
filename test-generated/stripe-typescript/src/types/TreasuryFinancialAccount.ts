import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { TreasuryFinancialAccountFeatures } from './TreasuryFinancialAccountFeatures';
import { TreasuryFinancialAccountFeaturesSchema } from './TreasuryFinancialAccountFeatures';
import type { TreasuryFinancialAccountsResourceBalance } from './TreasuryFinancialAccountsResourceBalance';
import { TreasuryFinancialAccountsResourceBalanceSchema } from './TreasuryFinancialAccountsResourceBalance';
import type { TreasuryFinancialAccountsResourceFinancialAddress } from './TreasuryFinancialAccountsResourceFinancialAddress';
import { TreasuryFinancialAccountsResourceFinancialAddressSchema } from './TreasuryFinancialAccountsResourceFinancialAddress';
import type { TreasuryFinancialAccountsResourcePlatformRestrictions } from './TreasuryFinancialAccountsResourcePlatformRestrictions';
import { TreasuryFinancialAccountsResourcePlatformRestrictionsSchema } from './TreasuryFinancialAccountsResourcePlatformRestrictions';
import type { TreasuryFinancialAccountsResourceStatusDetails } from './TreasuryFinancialAccountsResourceStatusDetails';
import { TreasuryFinancialAccountsResourceStatusDetailsSchema } from './TreasuryFinancialAccountsResourceStatusDetails';
/**
 * TreasuryFinancialAccountsResourceFinancialAccount
 *
 * Stripe Treasury provides users with a container for money called a FinancialAccount that is separate from their Payments balance.
FinancialAccounts serve as the source and destination of Treasury’s money movement APIs.
 */
export interface TreasuryFinancialAccount {
  /**
   * The array of paths to active Features in the Features hash.
   */
  activeFeatures?: Array<string>;
  /**
   * TreasuryFinancialAccountsResourceBalance
   *
   * Balance information for the FinancialAccount
   */
  balance: TreasuryFinancialAccountsResourceBalance;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * TreasuryFinancialAccountsResourceFinancialAccountFeatures
   *
   * Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`.
Stripe or the platform can control Features via the requested field.
   */
  features?: TreasuryFinancialAccountFeatures;
  /**
   * The set of credentials that resolve to a FinancialAccount.
   */
  financialAddresses: Array<TreasuryFinancialAccountsResourceFinancialAddress>;
  /**
   * Unique identifier for the object.
   */
  id: string;
  isDefault?: boolean;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * The nickname for the FinancialAccount.
   */
  nickname?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The array of paths to pending Features in the Features hash.
   */
  pendingFeatures?: Array<string>;
  /**
   * The set of functionalities that the platform can restrict on the FinancialAccount.
   */
  platformRestrictions?: TreasuryFinancialAccountsResourcePlatformRestrictions;
  /**
   * The array of paths to restricted Features in the Features hash.
   */
  restrictedFeatures?: Array<string>;
  /**
   * Status of this FinancialAccount.
   */
  status: string;
  /**
   * TreasuryFinancialAccountsResourceStatusDetails
   *
   * 
   */
  statusDetails: TreasuryFinancialAccountsResourceStatusDetails;
  /**
   * The currencies the FinancialAccount can hold a balance in. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
   */
  supportedCurrencies: Array<string>;
}

export const TreasuryFinancialAccountSchema: TypedSchema<TreasuryFinancialAccount> = typed<TreasuryFinancialAccount>(object({
  activeFeatures: optional(array(string())),
  balance: TreasuryFinancialAccountsResourceBalanceSchema,
  country: string(),
  created: number(),
  get features() { return optional(TreasuryFinancialAccountFeaturesSchema) },
  financialAddresses: array(TreasuryFinancialAccountsResourceFinancialAddressSchema),
  id: string(),
  isDefault: optional(boolean()),
  livemode: boolean(),
  get metadata() { return optional(MetadataPropertySchema) },
  nickname: optional(string()),
  object: string(),
  pendingFeatures: optional(array(string())),
  get platformRestrictions() { return optional(TreasuryFinancialAccountsResourcePlatformRestrictionsSchema) },
  restrictedFeatures: optional(array(string())),
  status: string(),
  statusDetails: TreasuryFinancialAccountsResourceStatusDetailsSchema,
  supportedCurrencies: array(string()),
}));