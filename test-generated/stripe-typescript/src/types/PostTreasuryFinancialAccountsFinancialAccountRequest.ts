import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostTreasuryFinancialAccountsFinancialAccountRequestFeatures } from './PostTreasuryFinancialAccountsFinancialAccountRequestFeatures';
import { PostTreasuryFinancialAccountsFinancialAccountRequestFeaturesSchema } from './PostTreasuryFinancialAccountsFinancialAccountRequestFeatures';
import type { PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettings } from './PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettings';
import { PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettingsSchema } from './PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettings';
import type { PostTreasuryFinancialAccountsRequestNickname } from './PostTreasuryFinancialAccountsRequestNickname';
import { PostTreasuryFinancialAccountsRequestNicknameSchema } from './PostTreasuryFinancialAccountsRequestNickname';
import type { PostTreasuryFinancialAccountsRequestPlatformRestrictions } from './PostTreasuryFinancialAccountsRequestPlatformRestrictions';
import { PostTreasuryFinancialAccountsRequestPlatformRestrictionsSchema } from './PostTreasuryFinancialAccountsRequestPlatformRestrictions';
export interface PostTreasuryFinancialAccountsFinancialAccountRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * feature_access
   *
   * Encodes whether a FinancialAccount has access to a particular feature, with a status enum and associated `status_details`. Stripe or the platform may control features via the requested field.
   */
  features?: PostTreasuryFinancialAccountsFinancialAccountRequestFeatures;
  /**
   * forwarding_settings
   *
   * A different bank account where funds can be deposited/debited in order to get the closing FA's balance to $0
   */
  forwardingSettings?: PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettings;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The nickname for the FinancialAccount.
   */
  nickname?: PostTreasuryFinancialAccountsRequestNickname;
  /**
   * platform_restrictions
   *
   * The set of functionalities that the platform can restrict on the FinancialAccount.
   */
  platformRestrictions?: PostTreasuryFinancialAccountsRequestPlatformRestrictions;
}

export const PostTreasuryFinancialAccountsFinancialAccountRequestSchema: TypedSchema<PostTreasuryFinancialAccountsFinancialAccountRequest> = typed<PostTreasuryFinancialAccountsFinancialAccountRequest>(object({
  expand: optional(array(string())),
  get features() { return optional(PostTreasuryFinancialAccountsFinancialAccountRequestFeaturesSchema) },
  get forwardingSettings() { return optional(PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettingsSchema) },
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  get nickname() { return optional(PostTreasuryFinancialAccountsRequestNicknameSchema) },
  get platformRestrictions() { return optional(PostTreasuryFinancialAccountsRequestPlatformRestrictionsSchema) },
}));