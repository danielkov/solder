import { object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * payment_method_reuse_agreement_params
 */
export interface PostCheckoutSessionsRequestPaymentMethodReuseAgreement {
  position: string;
}

export const PostCheckoutSessionsRequestPaymentMethodReuseAgreementSchema: TypedSchema<PostCheckoutSessionsRequestPaymentMethodReuseAgreement> = typed<PostCheckoutSessionsRequestPaymentMethodReuseAgreement>(object({ position: string() }));
