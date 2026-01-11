import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * mandate_online_acceptance_params
 */
export interface PostSourcesRequestOnline {
  date?: number;
  ip?: string;
  userAgent?: string;
}

export const PostSourcesRequestOnlineSchema: TypedSchema<PostSourcesRequestOnline> = typed<PostSourcesRequestOnline>(object({
  date: optional(number()),
  ip: optional(string()),
  userAgent: optional(string()),
}));