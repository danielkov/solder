import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * Alternative token with its log probability
 */
export interface OpenResponsesTopLogprobs {
  logprob?: number;
  token?: string;
}

export const OpenResponsesTopLogprobsSchema: TypedSchema<OpenResponsesTopLogprobs> = typed<OpenResponsesTopLogprobs>(object({
  logprob: optional(number()),
  token: optional(string()),
}));