import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { DefaultPostTaxCalculationsRequestAddress } from './DefaultPostTaxCalculationsRequestAddress';
import { DefaultPostTaxCalculationsRequestAddressSchema } from './DefaultPostTaxCalculationsRequestAddress';
/**
 * ship_from_details
 *
 * Details about the address from which the goods are being shipped.
 */
export interface PostTaxCalculationsRequestShipFromDetails {
  /**
   * merchant_postal_address
   */
  address: DefaultPostTaxCalculationsRequestAddress;
}

export const PostTaxCalculationsRequestShipFromDetailsSchema: TypedSchema<PostTaxCalculationsRequestShipFromDetails> = typed<PostTaxCalculationsRequestShipFromDetails>(object({
  address: DefaultPostTaxCalculationsRequestAddressSchema,
}));