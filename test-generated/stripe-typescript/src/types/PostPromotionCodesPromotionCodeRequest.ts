import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostPromotionCodesPromotionCodeRequestRestrictions } from './PostPromotionCodesPromotionCodeRequestRestrictions';
import { PostPromotionCodesPromotionCodeRequestRestrictionsSchema } from './PostPromotionCodesPromotionCodeRequestRestrictions';
export interface PostPromotionCodesPromotionCodeRequest {
  /**
   * Whether the promotion code is currently active. A promotion code can only be reactivated when the coupon is still valid and the promotion code is otherwise redeemable.
   */
  active?: boolean;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * restrictions_params
   *
   * Settings that restrict the redemption of the promotion code.
   */
  restrictions?: PostPromotionCodesPromotionCodeRequestRestrictions;
}

export const PostPromotionCodesPromotionCodeRequestSchema: TypedSchema<PostPromotionCodesPromotionCodeRequest> = typed<PostPromotionCodesPromotionCodeRequest>(object({
  active: optional(boolean()),
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get restrictions() { return optional(PostPromotionCodesPromotionCodeRequestRestrictionsSchema) },
}));