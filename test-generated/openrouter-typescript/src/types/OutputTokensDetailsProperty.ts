import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
export interface OutputTokensDetailsProperty {
  reasoningTokens: number;
}

export const OutputTokensDetailsPropertySchema: TypedSchema<OutputTokensDetailsProperty> = typed<OutputTokensDetailsProperty>(object({
  reasoningTokens: number(),
}));