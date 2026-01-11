import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
export interface CompletionUsage {
  completionTokens: number;
  promptTokens: number;
  totalTokens: number;
}

export const CompletionUsageSchema: TypedSchema<CompletionUsage> = typed<CompletionUsage>(object({
  completionTokens: number(),
  promptTokens: number(),
  totalTokens: number(),
}));