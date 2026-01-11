import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { OpenResponsesTopLogprobs } from './OpenResponsesTopLogprobs';
import { OpenResponsesTopLogprobsSchema } from './OpenResponsesTopLogprobs';
/**
 * Log probability information for a token
 */
export interface OpenResponsesLogProbs {
  logprob: number;
  token: string;
  topLogprobs?: Array<OpenResponsesTopLogprobs>;
}

export const OpenResponsesLogProbsSchema: TypedSchema<OpenResponsesLogProbs> = typed<OpenResponsesLogProbs>(object({
  logprob: number(),
  token: string(),
  get topLogprobs() { return optional(array(OpenResponsesTopLogprobsSchema)) },
}));