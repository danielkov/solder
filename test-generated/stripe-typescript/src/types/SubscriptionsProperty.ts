import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Subscription } from './Subscription';
import { SubscriptionSchema } from './Subscription';
/**
 * SubscriptionList
 *
 * The customer's current subscriptions, if any.
 */
export interface SubscriptionsProperty {
  /**
   * Details about each object.
   */
  data: Array<Subscription>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const SubscriptionsPropertySchema: TypedSchema<SubscriptionsProperty> = typed<SubscriptionsProperty>(object({
  data: array(SubscriptionSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));