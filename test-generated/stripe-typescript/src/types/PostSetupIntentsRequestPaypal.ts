import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostSetupIntentsRequestPaypal {
  billingAgreementId?: string;
}

export const PostSetupIntentsRequestPaypalSchema: TypedSchema<PostSetupIntentsRequestPaypal> = typed<PostSetupIntentsRequestPaypal>(object({
  billingAgreementId: optional(string()),
}));