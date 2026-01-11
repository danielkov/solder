import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersRequestTaxIdDataItem } from './PostCustomersRequestTaxIdDataItem';
import { PostCustomersRequestTaxIdDataItemSchema } from './PostCustomersRequestTaxIdDataItem';
import type { PostInvoicesCreatePreviewRequestAddress } from './PostInvoicesCreatePreviewRequestAddress';
import { PostInvoicesCreatePreviewRequestAddressSchema } from './PostInvoicesCreatePreviewRequestAddress';
import type { PostInvoicesCreatePreviewRequestShipping } from './PostInvoicesCreatePreviewRequestShipping';
import { PostInvoicesCreatePreviewRequestShippingSchema } from './PostInvoicesCreatePreviewRequestShipping';
import type { PostInvoicesCreatePreviewRequestTax } from './PostInvoicesCreatePreviewRequestTax';
import { PostInvoicesCreatePreviewRequestTaxSchema } from './PostInvoicesCreatePreviewRequestTax';
/**
 * customer_details_param
 *
 * Details about the customer you want to invoice or overrides for an existing customer. If `automatic_tax` is enabled then one of `customer`, `customer_details`, `subscription`, or `schedule` must be set.
 */
export interface PostInvoicesCreatePreviewRequestCustomerDetails {
  address?: PostInvoicesCreatePreviewRequestAddress;
  shipping?: PostInvoicesCreatePreviewRequestShipping;
  /**
   * tax_param
   */
  tax?: PostInvoicesCreatePreviewRequestTax;
  taxExempt?: string;
  taxIds?: Array<PostCustomersRequestTaxIdDataItem>;
}

export const PostInvoicesCreatePreviewRequestCustomerDetailsSchema: TypedSchema<PostInvoicesCreatePreviewRequestCustomerDetails> = typed<PostInvoicesCreatePreviewRequestCustomerDetails>(object({
  get address() { return optional(PostInvoicesCreatePreviewRequestAddressSchema) },
  get shipping() { return optional(PostInvoicesCreatePreviewRequestShippingSchema) },
  get tax() { return optional(PostInvoicesCreatePreviewRequestTaxSchema) },
  taxExempt: optional(string()),
  get taxIds() { return optional(array(PostCustomersRequestTaxIdDataItemSchema)) },
}));