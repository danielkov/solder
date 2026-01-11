import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * icon_params
 */
export interface PostCheckoutSessionsRequestIcon {
  file?: string;
  type: string;
  url?: string;
}

export const PostCheckoutSessionsRequestIconSchema: TypedSchema<PostCheckoutSessionsRequestIcon> = typed<PostCheckoutSessionsRequestIcon>(object({
  file: optional(string()),
  type: string(),
  url: optional(string()),
}));