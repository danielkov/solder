import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostIssuingCardholdersRequestAddress } from './PostIssuingCardholdersRequestAddress';
import { PostIssuingCardholdersRequestAddressSchema } from './PostIssuingCardholdersRequestAddress';
import type { PostIssuingCardsRequestAddressValidation } from './PostIssuingCardsRequestAddressValidation';
import { PostIssuingCardsRequestAddressValidationSchema } from './PostIssuingCardsRequestAddressValidation';
import type { PostIssuingCardsRequestCustoms } from './PostIssuingCardsRequestCustoms';
import { PostIssuingCardsRequestCustomsSchema } from './PostIssuingCardsRequestCustoms';
/**
 * shipping_specs
 *
 * Updated shipping information for the card.
 */
export interface PostIssuingCardsCardRequestShipping {
  /**
   * required_address
   */
  address: PostIssuingCardholdersRequestAddress;
  /**
   * address_validation_param
   */
  addressValidation?: PostIssuingCardsRequestAddressValidation;
  /**
   * customs_param
   */
  customs?: PostIssuingCardsRequestCustoms;
  name: string;
  phoneNumber?: string;
  requireSignature?: boolean;
  service?: string;
  type?: string;
}

export const PostIssuingCardsCardRequestShippingSchema: TypedSchema<PostIssuingCardsCardRequestShipping> = typed<PostIssuingCardsCardRequestShipping>(object({
  address: PostIssuingCardholdersRequestAddressSchema,
  get addressValidation() { return optional(PostIssuingCardsRequestAddressValidationSchema) },
  get customs() { return optional(PostIssuingCardsRequestCustomsSchema) },
  name: string(),
  phoneNumber: optional(string()),
  requireSignature: optional(boolean()),
  service: optional(string()),
  type: optional(string()),
}));