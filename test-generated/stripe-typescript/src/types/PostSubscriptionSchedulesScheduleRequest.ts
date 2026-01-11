import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostInvoicesCreatePreviewRequestPhasesItem } from './PostInvoicesCreatePreviewRequestPhasesItem';
import { PostInvoicesCreatePreviewRequestPhasesItemSchema } from './PostInvoicesCreatePreviewRequestPhasesItem';
import type { PostSubscriptionSchedulesRequestDefaultSettings } from './PostSubscriptionSchedulesRequestDefaultSettings';
import { PostSubscriptionSchedulesRequestDefaultSettingsSchema } from './PostSubscriptionSchedulesRequestDefaultSettings';
export interface PostSubscriptionSchedulesScheduleRequest {
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
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase. Note that past phases can be omitted.
   */
  phases?: Array<PostInvoicesCreatePreviewRequestPhasesItem>;
  /**
   * If the update changes the billing configuration (item price, quantity, etc.) of the current phase, indicates how prorations from this change should be handled. The default value is `create_prorations`.
   */
  prorationBehavior?: string;
}

export const PostSubscriptionSchedulesScheduleRequestSchema: TypedSchema<PostSubscriptionSchedulesScheduleRequest> = typed<PostSubscriptionSchedulesScheduleRequest>(object({
  get defaultSettings() { return optional(PostSubscriptionSchedulesRequestDefaultSettingsSchema) },
  endBehavior: optional(string()),
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get phases() { return optional(array(PostInvoicesCreatePreviewRequestPhasesItemSchema)) },
  prorationBehavior: optional(string()),
}));