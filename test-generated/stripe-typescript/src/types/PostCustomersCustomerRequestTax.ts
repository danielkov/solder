import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * shared_tax_update_param
 *
 * Tax details about the customer.
 */
export interface PostCustomersCustomerRequestTax {
  ipAddress?: PostAccountsRequestSupportUrl;
  validateLocation?: string;
}

export const PostCustomersCustomerRequestTaxSchema: TypedSchema<PostCustomersCustomerRequestTax> = typed<PostCustomersCustomerRequestTax>(object({
  get ipAddress() { return optional(PostAccountsRequestSupportUrlSchema) },
  validateLocation: optional(string()),
}));