import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
import type { PostChargesRequestAddress } from './PostChargesRequestAddress';
import { PostChargesRequestAddressSchema } from './PostChargesRequestAddress';
/**
 * recipient_shipping_with_optional_fields_address
 *
 * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
 */
export interface PostInvoicesRequestShippingDetails {
  /**
   * optional_fields_address
   */
  address: PostChargesRequestAddress;
  name: string;
  phone?: PostAccountsRequestPaymentsPricing;
}

export const PostInvoicesRequestShippingDetailsSchema: TypedSchema<PostInvoicesRequestShippingDetails> = typed<PostInvoicesRequestShippingDetails>(object({
  address: PostChargesRequestAddressSchema,
  name: string(),
  get phone() { return optional(PostAccountsRequestPaymentsPricingSchema) },
}));