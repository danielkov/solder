import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostWebhookEndpointsRequestDescription } from './PostWebhookEndpointsRequestDescription';
import { PostWebhookEndpointsRequestDescriptionSchema } from './PostWebhookEndpointsRequestDescription';
export interface PostWebhookEndpointsWebhookEndpointRequest {
  /**
   * An optional description of what the webhook is used for.
   */
  description?: PostWebhookEndpointsRequestDescription;
  /**
   * Disable the webhook endpoint if set to true.
   */
  disabled?: boolean;
  /**
   * The list of events to enable for this endpoint. You may specify `['*']` to enable all events, except those that require explicit selection.
   */
  enabledEvents?: Array<string>;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * The URL of the webhook endpoint.
   */
  url?: string;
}

export const PostWebhookEndpointsWebhookEndpointRequestSchema: TypedSchema<PostWebhookEndpointsWebhookEndpointRequest> = typed<PostWebhookEndpointsWebhookEndpointRequest>(object({
  get description() { return optional(PostWebhookEndpointsRequestDescriptionSchema) },
  disabled: optional(boolean()),
  enabledEvents: optional(array(string())),
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  url: optional(string()),
}));