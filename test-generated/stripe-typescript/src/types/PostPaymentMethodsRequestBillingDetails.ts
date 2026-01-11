import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
import type { PostPaymentIntentsRequestAddress } from './PostPaymentIntentsRequestAddress';
import { PostPaymentIntentsRequestAddressSchema } from './PostPaymentIntentsRequestAddress';
/**
 * billing_details_inner_params
 *
 * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
 */
export interface PostPaymentMethodsRequestBillingDetails {
  address?: PostPaymentIntentsRequestAddress;
  email?: PostAccountsRequestSupportUrl;
  name?: PostAccountsRequestPaymentsPricing;
  phone?: PostAccountsRequestPaymentsPricing;
  taxId?: string;
}

export const PostPaymentMethodsRequestBillingDetailsSchema: TypedSchema<PostPaymentMethodsRequestBillingDetails> = typed<PostPaymentMethodsRequestBillingDetails>(object({
  get address() { return optional(PostPaymentIntentsRequestAddressSchema) },
  get email() { return optional(PostAccountsRequestSupportUrlSchema) },
  get name() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get phone() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  taxId: optional(string()),
}));