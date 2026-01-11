import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
import type { PostChargesRequestAddress } from './PostChargesRequestAddress';
import { PostChargesRequestAddressSchema } from './PostChargesRequestAddress';
/**
 * recipient_shipping_with_optional_fields_address
 *
 * Shipping information for this ConfirmationToken.
 */
export interface PostTestHelpersConfirmationTokensRequestShipping {
  /**
   * optional_fields_address
   */
  address: PostChargesRequestAddress;
  name: string;
  phone?: PostAccountsRequestPaymentsPricing;
}

export const PostTestHelpersConfirmationTokensRequestShippingSchema: TypedSchema<PostTestHelpersConfirmationTokensRequestShipping> = typed<PostTestHelpersConfirmationTokensRequestShipping>(object({
  address: PostChargesRequestAddressSchema,
  name: string(),
  get phone() { return optional(PostAccountsRequestPaymentsPricingSchema) },
}));