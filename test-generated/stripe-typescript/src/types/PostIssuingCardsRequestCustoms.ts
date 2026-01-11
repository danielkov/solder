import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * customs_param
 */
export interface PostIssuingCardsRequestCustoms {
  eoriNumber?: string;
}

export const PostIssuingCardsRequestCustomsSchema: TypedSchema<PostIssuingCardsRequestCustoms> = typed<PostIssuingCardsRequestCustoms>(object({
  eoriNumber: optional(string()),
}));