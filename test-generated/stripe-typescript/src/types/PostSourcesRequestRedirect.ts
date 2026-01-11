import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * redirect_params
 *
 * Parameters required for the redirect flow. Required if the source is authenticated by a redirect (`flow` is `redirect`).
 */
export interface PostSourcesRequestRedirect {
  returnUrl: string;
}

export const PostSourcesRequestRedirectSchema: TypedSchema<PostSourcesRequestRedirect> = typed<PostSourcesRequestRedirect>(object({
  returnUrl: string(),
}));