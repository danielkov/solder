import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The second line to print on the card. Max length: 24 characters.
 */
export type PostIssuingCardsRequestSecondLine = string | string;

export const PostIssuingCardsRequestSecondLineSchema: TypedSchema<PostIssuingCardsRequestSecondLine> = typed<PostIssuingCardsRequestSecondLine>(union(string(), string()));
