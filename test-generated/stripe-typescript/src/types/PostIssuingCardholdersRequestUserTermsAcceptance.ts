import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
/**
 * terms_acceptance_param
 */
export interface PostIssuingCardholdersRequestUserTermsAcceptance {
  date?: number;
  ip?: string;
  userAgent?: PostAccountsRequestPaymentsPricing;
}

export const PostIssuingCardholdersRequestUserTermsAcceptanceSchema: TypedSchema<PostIssuingCardholdersRequestUserTermsAcceptance> = typed<PostIssuingCardholdersRequestUserTermsAcceptance>(object({
  date: optional(number()),
  ip: optional(string()),
  get userAgent() { return optional(PostAccountsRequestPaymentsPricingSchema) },
}));