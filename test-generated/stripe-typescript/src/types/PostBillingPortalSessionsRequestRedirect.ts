import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * after_completion_redirect_param
 */
export interface PostBillingPortalSessionsRequestRedirect {
  returnUrl: string;
}

export const PostBillingPortalSessionsRequestRedirectSchema: TypedSchema<PostBillingPortalSessionsRequestRedirect> = typed<PostBillingPortalSessionsRequestRedirect>(object({
  returnUrl: string(),
}));