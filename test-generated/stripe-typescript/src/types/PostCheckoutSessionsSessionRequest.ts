import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostCheckoutSessionsSessionRequestCollectedInformation } from './PostCheckoutSessionsSessionRequestCollectedInformation';
import { PostCheckoutSessionsSessionRequestCollectedInformationSchema } from './PostCheckoutSessionsSessionRequestCollectedInformation';
import type { PostCheckoutSessionsSessionRequestShippingOptions } from './PostCheckoutSessionsSessionRequestShippingOptions';
import { PostCheckoutSessionsSessionRequestShippingOptionsSchema } from './PostCheckoutSessionsSessionRequestShippingOptions';
export interface PostCheckoutSessionsSessionRequest {
  /**
   * collected_information_params
   *
   * Information about the customer collected within the Checkout Session. Can only be set when updating `embedded` or `custom` sessions.
   */
  collectedInformation?: PostCheckoutSessionsSessionRequestCollectedInformation;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * The shipping rate options to apply to this Session. Up to a maximum of 5.
   */
  shippingOptions?: PostCheckoutSessionsSessionRequestShippingOptions;
}

export const PostCheckoutSessionsSessionRequestSchema: TypedSchema<PostCheckoutSessionsSessionRequest> = typed<PostCheckoutSessionsSessionRequest>(object({
  get collectedInformation() { return optional(PostCheckoutSessionsSessionRequestCollectedInformationSchema) },
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get shippingOptions() { return optional(PostCheckoutSessionsSessionRequestShippingOptionsSchema) },
}));