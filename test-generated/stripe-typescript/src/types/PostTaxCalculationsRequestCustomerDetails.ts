import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersRequestTaxIdDataItem } from './PostCustomersRequestTaxIdDataItem';
import { PostCustomersRequestTaxIdDataItemSchema } from './PostCustomersRequestTaxIdDataItem';
import type { PostTaxCalculationsRequestAddress } from './PostTaxCalculationsRequestAddress';
import { PostTaxCalculationsRequestAddressSchema } from './PostTaxCalculationsRequestAddress';
/**
 * customer_details
 *
 * Details about the customer, including address and tax IDs.
 */
export interface PostTaxCalculationsRequestCustomerDetails {
  /**
   * postal_address
   */
  address?: PostTaxCalculationsRequestAddress;
  addressSource?: string;
  ipAddress?: string;
  taxIds?: Array<PostCustomersRequestTaxIdDataItem>;
  taxabilityOverride?: string;
}

export const PostTaxCalculationsRequestCustomerDetailsSchema: TypedSchema<PostTaxCalculationsRequestCustomerDetails> = typed<PostTaxCalculationsRequestCustomerDetails>(object({
  get address() { return optional(PostTaxCalculationsRequestAddressSchema) },
  addressSource: optional(string()),
  ipAddress: optional(string()),
  get taxIds() { return optional(array(PostCustomersRequestTaxIdDataItemSchema)) },
  taxabilityOverride: optional(string()),
}));