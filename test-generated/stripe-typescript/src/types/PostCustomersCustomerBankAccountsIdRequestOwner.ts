import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerBankAccountsIdRequestAddress } from './PostCustomersCustomerBankAccountsIdRequestAddress';
import { PostCustomersCustomerBankAccountsIdRequestAddressSchema } from './PostCustomersCustomerBankAccountsIdRequestAddress';
/**
 * owner
 */
export interface PostCustomersCustomerBankAccountsIdRequestOwner {
  /**
   * source_address
   */
  address?: PostCustomersCustomerBankAccountsIdRequestAddress;
  email?: string;
  name?: string;
  phone?: string;
}

export const PostCustomersCustomerBankAccountsIdRequestOwnerSchema: TypedSchema<PostCustomersCustomerBankAccountsIdRequestOwner> = typed<PostCustomersCustomerBankAccountsIdRequestOwner>(object({
  get address() { return optional(PostCustomersCustomerBankAccountsIdRequestAddressSchema) },
  email: optional(string()),
  name: optional(string()),
  phone: optional(string()),
}));