import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * tax_param
 */
export interface PostInvoicesCreatePreviewRequestTax {
  ipAddress?: PostAccountsRequestSupportUrl;
}

export const PostInvoicesCreatePreviewRequestTaxSchema: TypedSchema<PostInvoicesCreatePreviewRequestTax> = typed<PostInvoicesCreatePreviewRequestTax>(object({
  get ipAddress() { return optional(PostAccountsRequestSupportUrlSchema) },
}));