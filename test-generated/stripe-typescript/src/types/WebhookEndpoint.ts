import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * NotificationWebhookEndpoint
 *
 * You can configure [webhook endpoints](https://docs.stripe.com/webhooks/) via the API to be
notified about events that happen in your Stripe account or connected
accounts.

Most users configure webhooks from [the dashboard](https://dashboard.stripe.com/webhooks), which provides a user interface for registering and testing your webhook endpoints.

Related guide: [Setting up webhooks](https://docs.stripe.com/webhooks/configure)
 */
export interface WebhookEndpoint {
  /**
   * The API version events are rendered as for this webhook endpoint.
   */
  apiVersion?: string;
  /**
   * The ID of the associated Connect application.
   */
  application?: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * An optional description of what the webhook is used for.
   */
  description?: string;
  /**
   * The list of events to enable for this endpoint. `['*']` indicates that all events are enabled, except those that require explicit selection.
   */
  enabledEvents: Array<string>;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The endpoint's secret, used to generate [webhook signatures](https://docs.stripe.com/webhooks/signatures). Only returned at creation.
   */
  secret?: string;
  /**
   * The status of the webhook. It can be `enabled` or `disabled`.
   */
  status: string;
  /**
   * The URL of the webhook endpoint.
   */
  url: string;
}

export const WebhookEndpointSchema: TypedSchema<WebhookEndpoint> = typed<WebhookEndpoint>(object({
  apiVersion: optional(string()),
  application: optional(string()),
  created: number(),
  description: optional(string()),
  enabledEvents: array(string()),
  id: string(),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  object: string(),
  secret: optional(string()),
  status: string(),
  url: string(),
}));