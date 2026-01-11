import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
export interface PostPlansPlanRequest {
  /**
   * Whether the plan is currently available for new subscriptions.
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
   * A brief description of the plan, hidden from customers.
   */
  nickname?: string;
  /**
   * The product the plan belongs to. This cannot be changed once it has been used in a subscription or subscription schedule.
   */
  product?: string;
  /**
   * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
   */
  trialPeriodDays?: number;
}

export const PostPlansPlanRequestSchema: TypedSchema<PostPlansPlanRequest> = typed<PostPlansPlanRequest>(object({
  active: optional(boolean()),
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  nickname: optional(string()),
  product: optional(string()),
  trialPeriodDays: optional(number()),
}));