import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * cvc_params
 *
 * The updated CVC value this token represents.
 */
export interface PostTokensRequestCvcUpdate {
  cvc: string;
}

export const PostTokensRequestCvcUpdateSchema: TypedSchema<PostTokensRequestCvcUpdate> = typed<PostTokensRequestCvcUpdate>(object({
  cvc: string(),
}));