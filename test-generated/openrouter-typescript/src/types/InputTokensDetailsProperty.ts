import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
export interface InputTokensDetailsProperty {
  cachedTokens: number;
}

export const InputTokensDetailsPropertySchema: TypedSchema<InputTokensDetailsProperty> = typed<InputTokensDetailsProperty>(object({
  cachedTokens: number(),
}));