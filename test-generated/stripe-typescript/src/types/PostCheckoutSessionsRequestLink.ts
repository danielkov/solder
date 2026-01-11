import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * wallet_options_param
 */
export interface PostCheckoutSessionsRequestLink {
  display?: string;
}

export const PostCheckoutSessionsRequestLinkSchema: TypedSchema<PostCheckoutSessionsRequestLink> = typed<PostCheckoutSessionsRequestLink>(object({
  display: optional(string()),
}));