import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PostIssuingCardholdersRequestAddress } from './PostIssuingCardholdersRequestAddress';
import { PostIssuingCardholdersRequestAddressSchema } from './PostIssuingCardholdersRequestAddress';
/**
 * billing_specs
 *
 * The cardholder's billing address.
 */
export interface PostIssuingCardholdersRequestBilling {
  /**
   * required_address
   */
  address: PostIssuingCardholdersRequestAddress;
}

export const PostIssuingCardholdersRequestBillingSchema: TypedSchema<PostIssuingCardholdersRequestBilling> = typed<PostIssuingCardholdersRequestBilling>(object({
  address: PostIssuingCardholdersRequestAddressSchema,
}));