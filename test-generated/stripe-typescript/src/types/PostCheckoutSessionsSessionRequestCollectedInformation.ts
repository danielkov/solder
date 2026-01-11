import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsSessionRequestShippingDetails } from './PostCheckoutSessionsSessionRequestShippingDetails';
import { PostCheckoutSessionsSessionRequestShippingDetailsSchema } from './PostCheckoutSessionsSessionRequestShippingDetails';
/**
 * collected_information_params
 *
 * Information about the customer collected within the Checkout Session. Can only be set when updating `embedded` or `custom` sessions.
 */
export interface PostCheckoutSessionsSessionRequestCollectedInformation {
  /**
   * shipping_details_params
   */
  shippingDetails?: PostCheckoutSessionsSessionRequestShippingDetails;
}

export const PostCheckoutSessionsSessionRequestCollectedInformationSchema: TypedSchema<PostCheckoutSessionsSessionRequestCollectedInformation> = typed<PostCheckoutSessionsSessionRequestCollectedInformation>(object({
  get shippingDetails() { return optional(PostCheckoutSessionsSessionRequestShippingDetailsSchema) },
}));