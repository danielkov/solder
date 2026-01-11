import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { SubscriptionsTrialsResourceEndBehavior } from './SubscriptionsTrialsResourceEndBehavior';
import { SubscriptionsTrialsResourceEndBehaviorSchema } from './SubscriptionsTrialsResourceEndBehavior';
/**
 * SubscriptionsTrialsResourceTrialSettings
 *
 * Configures how this subscription behaves during the trial period.
 */
export interface SubscriptionsTrialsResourceTrialSettings {
  /**
   * SubscriptionsTrialsResourceEndBehavior
   *
   * Defines how a subscription behaves when a free trial ends.
   */
  endBehavior: SubscriptionsTrialsResourceEndBehavior;
}

export const SubscriptionsTrialsResourceTrialSettingsSchema: TypedSchema<SubscriptionsTrialsResourceTrialSettings> = typed<SubscriptionsTrialsResourceTrialSettings>(object({
  endBehavior: SubscriptionsTrialsResourceEndBehaviorSchema,
}));