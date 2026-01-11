import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * SubscriptionsTrialsResourceEndBehavior
 *
 * Defines how a subscription behaves when a free trial ends.
 */
export interface SubscriptionsTrialsResourceEndBehavior {
  /**
   * Indicates how the subscription should change when the trial ends if the user did not provide a payment method.
   */
  missingPaymentMethod: string;
}

export const SubscriptionsTrialsResourceEndBehaviorSchema: TypedSchema<SubscriptionsTrialsResourceEndBehavior> = typed<SubscriptionsTrialsResourceEndBehavior>(object({
  missingPaymentMethod: string(),
}));