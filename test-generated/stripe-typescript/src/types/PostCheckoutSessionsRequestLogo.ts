import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * logo_params
 */
export interface PostCheckoutSessionsRequestLogo {
  file?: string;
  type: string;
  url?: string;
}

export const PostCheckoutSessionsRequestLogoSchema: TypedSchema<PostCheckoutSessionsRequestLogo> = typed<PostCheckoutSessionsRequestLogo>(object({
  file: optional(string()),
  type: string(),
  url: optional(string()),
}));