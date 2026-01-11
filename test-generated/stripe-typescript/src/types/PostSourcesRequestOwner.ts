import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerBankAccountsIdRequestAddress } from './PostCustomersCustomerBankAccountsIdRequestAddress';
import { PostCustomersCustomerBankAccountsIdRequestAddressSchema } from './PostCustomersCustomerBankAccountsIdRequestAddress';
/**
 * owner
 *
 * Information about the owner of the payment instrument that may be used or required by particular source types.
 */
export interface PostSourcesRequestOwner {
  /**
   * source_address
   */
  address?: PostCustomersCustomerBankAccountsIdRequestAddress;
  email?: string;
  name?: string;
  phone?: string;
}

export const PostSourcesRequestOwnerSchema: TypedSchema<PostSourcesRequestOwner> = typed<PostSourcesRequestOwner>(object({
  get address() { return optional(PostCustomersCustomerBankAccountsIdRequestAddressSchema) },
  email: optional(string()),
  name: optional(string()),
  phone: optional(string()),
}));