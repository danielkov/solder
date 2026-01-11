import { TypedSchema, nullable, number, typed, union, unknown } from '@speakeasy-api/tonic';
export type CompletionTokensDetailsUnionObjectAcceptedPredictionTokens = number | any | null;

export const CompletionTokensDetailsUnionObjectAcceptedPredictionTokensSchema: TypedSchema<CompletionTokensDetailsUnionObjectAcceptedPredictionTokens> = typed<CompletionTokensDetailsUnionObjectAcceptedPredictionTokens>(union(number(), nullable(unknown())));