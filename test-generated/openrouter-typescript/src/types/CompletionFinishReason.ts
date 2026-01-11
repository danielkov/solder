import { TypedSchema, nullable, string, typed, union, unknown } from '@speakeasy-api/tonic';
export type CompletionFinishReason = string | any | null;

export const CompletionFinishReasonSchema: TypedSchema<CompletionFinishReason> = typed<CompletionFinishReason>(union(string(), nullable(unknown())));