import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
export interface PromptTokensDetailsUnionObject {
  audioTokens?: number;
  cachedTokens?: number;
  videoTokens?: number;
}

export const PromptTokensDetailsUnionObjectSchema: TypedSchema<PromptTokensDetailsUnionObject> = typed<PromptTokensDetailsUnionObject>(object({
  audioTokens: optional(number()),
  cachedTokens: optional(number()),
  videoTokens: optional(number()),
}));