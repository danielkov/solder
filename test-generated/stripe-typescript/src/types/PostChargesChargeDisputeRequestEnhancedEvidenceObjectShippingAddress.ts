import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
/**
 * shipping_address
 */
export interface PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddress {
  city?: PostAccountsRequestPaymentsPricing;
  country?: PostAccountsRequestPaymentsPricing;
  line1?: PostAccountsRequestPaymentsPricing;
  line2?: PostAccountsRequestPaymentsPricing;
  postalCode?: PostAccountsRequestPaymentsPricing;
  state?: PostAccountsRequestPaymentsPricing;
}

export const PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddressSchema: TypedSchema<PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddress> = typed<PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddress>(object({
  get city() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get country() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get line1() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get line2() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get postalCode() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get state() { return optional(PostAccountsRequestPaymentsPricingSchema) },
}));