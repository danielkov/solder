import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * shared_tax_create_param
 *
 * Tax details about the customer.
 */
export interface PostCustomersRequestTax {
  ipAddress?: PostAccountsRequestSupportUrl;
  validateLocation?: string;
}

export const PostCustomersRequestTaxSchema: TypedSchema<PostCustomersRequestTax> = typed<PostCustomersRequestTax>(object({
  get ipAddress() { return optional(PostAccountsRequestSupportUrlSchema) },
  validateLocation: optional(string()),
}));