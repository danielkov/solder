import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestPaymentMethodReuseAgreement } from './PostCheckoutSessionsRequestPaymentMethodReuseAgreement';
import { PostCheckoutSessionsRequestPaymentMethodReuseAgreementSchema } from './PostCheckoutSessionsRequestPaymentMethodReuseAgreement';
/**
 * consent_collection_params
 *
 * Configure fields to gather active consent from customers.
 */
export interface PostPaymentLinksRequestConsentCollection {
  /**
   * payment_method_reuse_agreement_params
   */
  paymentMethodReuseAgreement?: PostCheckoutSessionsRequestPaymentMethodReuseAgreement;
  promotions?: string;
  termsOfService?: string;
}

export const PostPaymentLinksRequestConsentCollectionSchema: TypedSchema<PostPaymentLinksRequestConsentCollection> = typed<PostPaymentLinksRequestConsentCollection>(object({
  get paymentMethodReuseAgreement() { return optional(PostCheckoutSessionsRequestPaymentMethodReuseAgreementSchema) },
  promotions: optional(string()),
  termsOfService: optional(string()),
}));