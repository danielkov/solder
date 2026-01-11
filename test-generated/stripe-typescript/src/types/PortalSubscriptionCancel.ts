import { TypedSchema, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { PortalSubscriptionCancellationReason } from './PortalSubscriptionCancellationReason';
import { PortalSubscriptionCancellationReasonSchema } from './PortalSubscriptionCancellationReason';
/**
 * PortalSubscriptionCancel
 *
 * 
 */
export interface PortalSubscriptionCancel {
  /**
   * PortalSubscriptionCancellationReason
   *
   * 
   */
  cancellationReason: PortalSubscriptionCancellationReason;
  /**
   * Whether the feature is enabled.
   */
  enabled: boolean;
  /**
   * Whether to cancel subscriptions immediately or at the end of the billing period.
   */
  mode: string;
  /**
   * Whether to create prorations when canceling subscriptions. Possible values are `none` and `create_prorations`.
   */
  prorationBehavior: string;
}

export const PortalSubscriptionCancelSchema: TypedSchema<PortalSubscriptionCancel> = typed<PortalSubscriptionCancel>(object({
  cancellationReason: PortalSubscriptionCancellationReasonSchema,
  enabled: boolean(),
  mode: string(),
  prorationBehavior: string(),
}));