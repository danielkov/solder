import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostShippingRatesShippingRateTokenRequestFixedAmount } from './PostShippingRatesShippingRateTokenRequestFixedAmount';
import { PostShippingRatesShippingRateTokenRequestFixedAmountSchema } from './PostShippingRatesShippingRateTokenRequestFixedAmount';
export interface PostShippingRatesShippingRateTokenRequest {
  /**
   * Whether the shipping rate can be used for new purchases. Defaults to `true`.
   */
  active?: boolean;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * fixed_amount_update
   *
   * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
   */
  fixedAmount?: PostShippingRatesShippingRateTokenRequestFixedAmount;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
   */
  taxBehavior?: string;
}

export const PostShippingRatesShippingRateTokenRequestSchema: TypedSchema<PostShippingRatesShippingRateTokenRequest> = typed<PostShippingRatesShippingRateTokenRequest>(object({
  active: optional(boolean()),
  expand: optional(array(string())),
  get fixedAmount() { return optional(PostShippingRatesShippingRateTokenRequestFixedAmountSchema) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  taxBehavior: optional(string()),
}));