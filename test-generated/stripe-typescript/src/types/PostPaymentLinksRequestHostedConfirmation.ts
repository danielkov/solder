import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * after_completion_confirmation_page_params
 */
export interface PostPaymentLinksRequestHostedConfirmation {
  customMessage?: string;
}

export const PostPaymentLinksRequestHostedConfirmationSchema: TypedSchema<PostPaymentLinksRequestHostedConfirmation> = typed<PostPaymentLinksRequestHostedConfirmation>(object({
  customMessage: optional(string()),
}));