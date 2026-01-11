import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostIssuingCardsRequestSecondLine = string | string;

export const PostIssuingCardsRequestSecondLineSchema: TypedSchema<PostIssuingCardsRequestSecondLine> = typed<PostIssuingCardsRequestSecondLine>(union(string(), string()));