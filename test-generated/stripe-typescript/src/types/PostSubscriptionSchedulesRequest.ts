import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostSubscriptionSchedulesRequestBillingMode } from './PostSubscriptionSchedulesRequestBillingMode';
import { PostSubscriptionSchedulesRequestBillingModeSchema } from './PostSubscriptionSchedulesRequestBillingMode';
import type { PostSubscriptionSchedulesRequestDefaultSettings } from './PostSubscriptionSchedulesRequestDefaultSettings';
import { PostSubscriptionSchedulesRequestDefaultSettingsSchema } from './PostSubscriptionSchedulesRequestDefaultSettings';
import type { PostSubscriptionSchedulesRequestPhasesItem } from './PostSubscriptionSchedulesRequestPhasesItem';
import { PostSubscriptionSchedulesRequestPhasesItemSchema } from './PostSubscriptionSchedulesRequestPhasesItem';
import type { PostSubscriptionSchedulesRequestStartDate } from './PostSubscriptionSchedulesRequestStartDate';
import { PostSubscriptionSchedulesRequestStartDateSchema } from './PostSubscriptionSchedulesRequestStartDate';
export interface PostSubscriptionSchedulesRequest {
  /**
   * billing_mode
   *
   * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
   */
  billingMode?: PostSubscriptionSchedulesRequestBillingMode;
  /**
   * The identifier of the customer to create the subscription schedule for.
   */
  customer?: string;
  /**
   * default_settings_params
   *
   * Object representing the subscription schedule's default settings.
   */
  defaultSettings?: PostSubscriptionSchedulesRequestDefaultSettings;
  /**
   * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
   */
  endBehavior?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Migrate an existing subscription to be managed by a subscription schedule. If this parameter is set, a subscription schedule will be created using the subscription's item(s), set to auto-renew using the subscription's interval. When using this parameter, other parameters (such as phase values) cannot be set. To create a subscription schedule with other modifications, we recommend making two separate API calls.
   */
  fromSubscription?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase.
   */
  phases?: Array<PostSubscriptionSchedulesRequestPhasesItem>;
  /**
   * When the subscription schedule starts. We recommend using `now` so that it starts the subscription immediately. You can also use a Unix timestamp to backdate the subscription so that it starts on a past date, or set a future date for the subscription to start on.
   */
  startDate?: PostSubscriptionSchedulesRequestStartDate;
}

export const PostSubscriptionSchedulesRequestSchema: TypedSchema<PostSubscriptionSchedulesRequest> = typed<PostSubscriptionSchedulesRequest>(object({
  get billingMode() { return optional(PostSubscriptionSchedulesRequestBillingModeSchema) },
  customer: optional(string()),
  get defaultSettings() { return optional(PostSubscriptionSchedulesRequestDefaultSettingsSchema) },
  endBehavior: optional(string()),
  expand: optional(array(string())),
  fromSubscription: optional(string()),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get phases() { return optional(array(PostSubscriptionSchedulesRequestPhasesItemSchema)) },
  get startDate() { return optional(PostSubscriptionSchedulesRequestStartDateSchema) },
}));