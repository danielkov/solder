import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
/**
 * settings_terms_of_service_specs
 */
export interface PostAccountsRequestTosAcceptance {
  date?: number;
  ip?: string;
  userAgent?: PostAccountsRequestPaymentsPricing;
}

export const PostAccountsRequestTosAcceptanceSchema: TypedSchema<PostAccountsRequestTosAcceptance> = typed<PostAccountsRequestTosAcceptance>(object({
  date: optional(number()),
  ip: optional(string()),
  get userAgent() { return optional(PostAccountsRequestPaymentsPricingSchema) },
}));