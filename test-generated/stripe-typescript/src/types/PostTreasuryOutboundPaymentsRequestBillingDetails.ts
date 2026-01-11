import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
import type { PostPaymentIntentsRequestAddress } from './PostPaymentIntentsRequestAddress';
import { PostPaymentIntentsRequestAddressSchema } from './PostPaymentIntentsRequestAddress';
/**
 * billing_details_inner_params
 */
export interface PostTreasuryOutboundPaymentsRequestBillingDetails {
  address?: PostPaymentIntentsRequestAddress;
  email?: PostAccountsRequestSupportUrl;
  name?: PostAccountsRequestPaymentsPricing;
  phone?: PostAccountsRequestPaymentsPricing;
}

export const PostTreasuryOutboundPaymentsRequestBillingDetailsSchema: TypedSchema<PostTreasuryOutboundPaymentsRequestBillingDetails> = typed<PostTreasuryOutboundPaymentsRequestBillingDetails>(object({
  get address() { return optional(PostPaymentIntentsRequestAddressSchema) },
  get email() { return optional(PostAccountsRequestSupportUrlSchema) },
  get name() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get phone() { return optional(PostAccountsRequestPaymentsPricingSchema) },
}));