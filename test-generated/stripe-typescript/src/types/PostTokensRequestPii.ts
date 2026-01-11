import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * pii_token_specs
 *
 * The PII this token represents.
 */
export interface PostTokensRequestPii {
  idNumber?: string;
}

export const PostTokensRequestPiiSchema: TypedSchema<PostTokensRequestPii> = typed<PostTokensRequestPii>(object({
  idNumber: optional(string()),
}));