import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SubscriptionsResourcePauseCollection
 *
 * The Pause Collection settings determine how we will pause collection for this subscription and for how long the subscription
should be paused.
 */
export interface SubscriptionsResourcePauseCollection {
  /**
   * The payment collection behavior for this subscription while paused. One of `keep_as_draft`, `mark_uncollectible`, or `void`.
   */
  behavior: string;
  /**
   * The time after which the subscription will resume collecting payments.
   */
  resumesAt?: number;
}

export const SubscriptionsResourcePauseCollectionSchema: TypedSchema<SubscriptionsResourcePauseCollection> = typed<SubscriptionsResourcePauseCollection>(object({
  behavior: string(),
  resumesAt: optional(number()),
}));