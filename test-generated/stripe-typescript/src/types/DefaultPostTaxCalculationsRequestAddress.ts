import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
/**
 * merchant_postal_address
 */
export interface DefaultPostTaxCalculationsRequestAddress {
  city?: PostAccountsRequestPaymentsPricing;
  country: string;
  line1?: PostAccountsRequestPaymentsPricing;
  line2?: PostAccountsRequestPaymentsPricing;
  postalCode?: PostAccountsRequestPaymentsPricing;
  state?: PostAccountsRequestPaymentsPricing;
}

export const DefaultPostTaxCalculationsRequestAddressSchema: TypedSchema<DefaultPostTaxCalculationsRequestAddress> = typed<DefaultPostTaxCalculationsRequestAddress>(object({
  get city() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  country: string(),
  get line1() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get line2() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get postalCode() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get state() { return optional(PostAccountsRequestPaymentsPricingSchema) },
}));