import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PortalResourceScheduleUpdateAtPeriodEnd } from './PortalResourceScheduleUpdateAtPeriodEnd';
import { PortalResourceScheduleUpdateAtPeriodEndSchema } from './PortalResourceScheduleUpdateAtPeriodEnd';
import type { PortalSubscriptionUpdateProduct } from './PortalSubscriptionUpdateProduct';
import { PortalSubscriptionUpdateProductSchema } from './PortalSubscriptionUpdateProduct';
/**
 * PortalSubscriptionUpdate
 *
 * 
 */
export interface PortalSubscriptionUpdate {
  /**
   * The types of subscription updates that are supported for items listed in the `products` attribute. When empty, subscriptions are not updateable.
   */
  defaultAllowedUpdates: Array<string>;
  /**
   * Whether the feature is enabled.
   */
  enabled: boolean;
  /**
   * The list of up to 10 products that support subscription updates.
   */
  products?: Array<PortalSubscriptionUpdateProduct>;
  /**
   * Determines how to handle prorations resulting from subscription updates. Valid values are `none`, `create_prorations`, and `always_invoice`. Defaults to a value of `none` if you don't set it during creation.
   */
  prorationBehavior: string;
  /**
   * PortalResourceScheduleUpdateAtPeriodEnd
   *
   * 
   */
  scheduleAtPeriodEnd: PortalResourceScheduleUpdateAtPeriodEnd;
  /**
   * Determines how handle updates to trialing subscriptions. Valid values are `end_trial` and `continue_trial`. Defaults to a value of `end_trial` if you don't set it during creation.
   */
  trialUpdateBehavior: string;
}

export const PortalSubscriptionUpdateSchema: TypedSchema<PortalSubscriptionUpdate> = typed<PortalSubscriptionUpdate>(object({
  defaultAllowedUpdates: array(string()),
  enabled: boolean(),
  get products() { return optional(array(PortalSubscriptionUpdateProductSchema)) },
  prorationBehavior: string(),
  scheduleAtPeriodEnd: PortalResourceScheduleUpdateAtPeriodEndSchema,
  trialUpdateBehavior: string(),
}));