import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 */
export interface PostCheckoutSessionsRequestLiability {
  account?: string;
  type: string;
}

export const PostCheckoutSessionsRequestLiabilitySchema: TypedSchema<PostCheckoutSessionsRequestLiability> = typed<PostCheckoutSessionsRequestLiability>(object({
  account: optional(string()),
  type: string(),
}));