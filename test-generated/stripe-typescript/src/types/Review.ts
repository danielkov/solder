import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ChargeOrRef } from './ChargeOrRef';
import { ChargeOrRefSchema } from './ChargeOrRef';
import type { PaymentIntentOrRef } from './PaymentIntentOrRef';
import { PaymentIntentOrRefSchema } from './PaymentIntentOrRef';
import type { RadarReviewResourceLocation } from './RadarReviewResourceLocation';
import { RadarReviewResourceLocationSchema } from './RadarReviewResourceLocation';
import type { RadarReviewResourceSession } from './RadarReviewResourceSession';
import { RadarReviewResourceSessionSchema } from './RadarReviewResourceSession';
/**
 * RadarReview
 *
 * Reviews can be used to supplement automated fraud detection with human expertise.

Learn more about [Radar](/radar) and reviewing payments
[here](https://stripe.com/docs/radar/reviews).
 */
export interface Review {
  /**
   * The ZIP or postal code of the card used, if applicable.
   */
  billingZip?: string;
  /**
   * The charge associated with this review.
   */
  charge?: ChargeOrRef;
  /**
   * The reason the review was closed, or null if it has not yet been closed. One of `approved`, `refunded`, `refunded_as_fraud`, `disputed`, `redacted`, `canceled`, `payment_never_settled`, or `acknowledged`.
   */
  closedReason?: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The IP address where the payment originated.
   */
  ipAddress?: string;
  /**
   * Information related to the location of the payment. Note that this information is an approximation and attempts to locate the nearest population center - it should not be used to determine a specific address.
   */
  ipAddressLocation?: RadarReviewResourceLocation;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * If `true`, the review needs action.
   */
  open: boolean;
  /**
   * The reason the review was opened. One of `rule` or `manual`.
   */
  openedReason: string;
  /**
   * The PaymentIntent ID associated with this review, if one exists.
   */
  paymentIntent?: PaymentIntentOrRef;
  /**
   * The reason the review is currently open or closed. One of `rule`, `manual`, `approved`, `refunded`, `refunded_as_fraud`, `disputed`, `redacted`, `canceled`, `payment_never_settled`, or `acknowledged`.
   */
  reason: string;
  /**
   * Information related to the browsing session of the user who initiated the payment.
   */
  session?: RadarReviewResourceSession;
}

export const ReviewSchema: TypedSchema<Review> = typed<Review>(object({
  billingZip: optional(string()),
  get charge() { return optional(ChargeOrRefSchema) },
  closedReason: optional(string()),
  created: number(),
  id: string(),
  ipAddress: optional(string()),
  get ipAddressLocation() { return optional(RadarReviewResourceLocationSchema) },
  livemode: boolean(),
  object: string(),
  open: boolean(),
  openedReason: string(),
  get paymentIntent() { return optional(PaymentIntentOrRefSchema) },
  reason: string(),
  get session() { return optional(RadarReviewResourceSessionSchema) },
}));