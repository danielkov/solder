import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * after_completion_redirect_params
 */
export interface PostPaymentLinksRequestRedirect {
  url: string;
}

export const PostPaymentLinksRequestRedirectSchema: TypedSchema<PostPaymentLinksRequestRedirect> = typed<PostPaymentLinksRequestRedirect>(object({
  url: string(),
}));