import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsSessionRequestAddress } from './PostCheckoutSessionsSessionRequestAddress';
import { PostCheckoutSessionsSessionRequestAddressSchema } from './PostCheckoutSessionsSessionRequestAddress';
/**
 * shipping_details_params
 */
export interface PostCheckoutSessionsSessionRequestShippingDetails {
  /**
   * address
   */
  address: PostCheckoutSessionsSessionRequestAddress;
  name: string;
}

export const PostCheckoutSessionsSessionRequestShippingDetailsSchema: TypedSchema<PostCheckoutSessionsSessionRequestShippingDetails> = typed<PostCheckoutSessionsSessionRequestShippingDetails>(object({
  address: PostCheckoutSessionsSessionRequestAddressSchema,
  name: string(),
}));