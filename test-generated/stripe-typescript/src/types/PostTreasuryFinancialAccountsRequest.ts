import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostTreasuryFinancialAccountsRequestFeatures } from './PostTreasuryFinancialAccountsRequestFeatures';
import { PostTreasuryFinancialAccountsRequestFeaturesSchema } from './PostTreasuryFinancialAccountsRequestFeatures';
import type { PostTreasuryFinancialAccountsRequestNickname } from './PostTreasuryFinancialAccountsRequestNickname';
import { PostTreasuryFinancialAccountsRequestNicknameSchema } from './PostTreasuryFinancialAccountsRequestNickname';
import type { PostTreasuryFinancialAccountsRequestPlatformRestrictions } from './PostTreasuryFinancialAccountsRequestPlatformRestrictions';
import { PostTreasuryFinancialAccountsRequestPlatformRestrictionsSchema } from './PostTreasuryFinancialAccountsRequestPlatformRestrictions';
export interface PostTreasuryFinancialAccountsRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * feature_access
   *
   * Encodes whether a FinancialAccount has access to a particular feature. Stripe or the platform can control features via the requested field.
   */
  features?: PostTreasuryFinancialAccountsRequestFeatures;
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
  /**
   * The currencies the FinancialAccount can hold a balance in.
   */
  supportedCurrencies: Array<string>;
}

export const PostTreasuryFinancialAccountsRequestSchema: TypedSchema<PostTreasuryFinancialAccountsRequest> = typed<PostTreasuryFinancialAccountsRequest>(object({
  expand: optional(array(string())),
  get features() { return optional(PostTreasuryFinancialAccountsRequestFeaturesSchema) },
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  get nickname() { return optional(PostTreasuryFinancialAccountsRequestNicknameSchema) },
  get platformRestrictions() { return optional(PostTreasuryFinancialAccountsRequestPlatformRestrictionsSchema) },
  supportedCurrencies: array(string()),
}));