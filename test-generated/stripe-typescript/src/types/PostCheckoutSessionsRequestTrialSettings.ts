import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestEndBehavior } from './PostCheckoutSessionsRequestEndBehavior';
import { PostCheckoutSessionsRequestEndBehaviorSchema } from './PostCheckoutSessionsRequestEndBehavior';
/**
 * trial_settings_config
 */
export interface PostCheckoutSessionsRequestTrialSettings {
  /**
   * end_behavior
   */
  endBehavior: PostCheckoutSessionsRequestEndBehavior;
}

export const PostCheckoutSessionsRequestTrialSettingsSchema: TypedSchema<PostCheckoutSessionsRequestTrialSettings> = typed<PostCheckoutSessionsRequestTrialSettings>(object({
  endBehavior: PostCheckoutSessionsRequestEndBehaviorSchema,
}));