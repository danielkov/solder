import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostPromotionCodesRequestPromotion } from './PostPromotionCodesRequestPromotion';
import { PostPromotionCodesRequestPromotionSchema } from './PostPromotionCodesRequestPromotion';
import type { PostPromotionCodesRequestRestrictions } from './PostPromotionCodesRequestRestrictions';
import { PostPromotionCodesRequestRestrictionsSchema } from './PostPromotionCodesRequestRestrictions';
export interface PostPromotionCodesRequest {
  /**
   * Whether the promotion code is currently active.
   */
  active?: boolean;
  /**
   * The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for a specific customer. Valid characters are lower case letters (a-z), upper case letters (A-Z), and digits (0-9).

If left blank, we will generate one automatically.
   */
  code?: string;
  /**
   * The customer that this promotion code can be used by. If not set, the promotion code can be used by all customers.
   */
  customer?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The timestamp at which this promotion code will expire. If the coupon has specified a `redeems_by`, then this value cannot be after the coupon's `redeems_by`.
   */
  expiresAt?: number;
  /**
   * A positive integer specifying the number of times the promotion code can be redeemed. If the coupon has specified a `max_redemptions`, then this value cannot be greater than the coupon's `max_redemptions`.
   */
  maxRedemptions?: number;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * promotion
   *
   * The promotion referenced by this promotion code.
   */
  promotion: PostPromotionCodesRequestPromotion;
  /**
   * restrictions_params
   *
   * Settings that restrict the redemption of the promotion code.
   */
  restrictions?: PostPromotionCodesRequestRestrictions;
}

export const PostPromotionCodesRequestSchema: TypedSchema<PostPromotionCodesRequest> = typed<PostPromotionCodesRequest>(object({
  active: optional(boolean()),
  code: optional(string()),
  customer: optional(string()),
  expand: optional(array(string())),
  expiresAt: optional(number()),
  maxRedemptions: optional(number()),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  promotion: PostPromotionCodesRequestPromotionSchema,
  get restrictions() { return optional(PostPromotionCodesRequestRestrictionsSchema) },
}));