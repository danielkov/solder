import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestEndBehavior } from './PostCheckoutSessionsRequestEndBehavior';
import { PostCheckoutSessionsRequestEndBehaviorSchema } from './PostCheckoutSessionsRequestEndBehavior';
/**
 * trial_settings_config
 *
 * Settings related to subscription trials.
 */
export interface PostCustomersCustomerSubscriptionsRequestTrialSettings {
  /**
   * end_behavior
   */
  endBehavior: PostCheckoutSessionsRequestEndBehavior;
}

export const PostCustomersCustomerSubscriptionsRequestTrialSettingsSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestTrialSettings> = typed<PostCustomersCustomerSubscriptionsRequestTrialSettings>(object({
  endBehavior: PostCheckoutSessionsRequestEndBehaviorSchema,
}));