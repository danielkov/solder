import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { CompletionTokensDetailsUnionObjectAcceptedPredictionTokens } from './CompletionTokensDetailsUnionObjectAcceptedPredictionTokens';
import { CompletionTokensDetailsUnionObjectAcceptedPredictionTokensSchema } from './CompletionTokensDetailsUnionObjectAcceptedPredictionTokens';
export interface CompletionTokensDetailsUnionObject {
  acceptedPredictionTokens?: CompletionTokensDetailsUnionObjectAcceptedPredictionTokens;
  audioTokens?: CompletionTokensDetailsUnionObjectAcceptedPredictionTokens;
  reasoningTokens?: CompletionTokensDetailsUnionObjectAcceptedPredictionTokens;
  rejectedPredictionTokens?: CompletionTokensDetailsUnionObjectAcceptedPredictionTokens;
}

export const CompletionTokensDetailsUnionObjectSchema: TypedSchema<CompletionTokensDetailsUnionObject> = typed<CompletionTokensDetailsUnionObject>(object({
  get acceptedPredictionTokens() { return optional(CompletionTokensDetailsUnionObjectAcceptedPredictionTokensSchema) },
  get audioTokens() { return optional(CompletionTokensDetailsUnionObjectAcceptedPredictionTokensSchema) },
  get reasoningTokens() { return optional(CompletionTokensDetailsUnionObjectAcceptedPredictionTokensSchema) },
  get rejectedPredictionTokens() { return optional(CompletionTokensDetailsUnionObjectAcceptedPredictionTokensSchema) },
}));