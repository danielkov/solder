import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BestOfUnion } from './BestOfUnion';
import { BestOfUnionSchema } from './BestOfUnion';
import type { FrequencyPenaltyUnion } from './FrequencyPenaltyUnion';
import { FrequencyPenaltyUnionSchema } from './FrequencyPenaltyUnion';
import type { LogitBiasUnion } from './LogitBiasUnion';
import { LogitBiasUnionSchema } from './LogitBiasUnion';
import type { LogprobsUnion } from './LogprobsUnion';
import { LogprobsUnionSchema } from './LogprobsUnion';
import type { LogprobsUnion4 } from './LogprobsUnion4';
import { LogprobsUnion4Schema } from './LogprobsUnion4';
import type { MaxTokensUnion } from './MaxTokensUnion';
import { MaxTokensUnionSchema } from './MaxTokensUnion';
import type { MetadataUnion } from './MetadataUnion';
import { MetadataUnionSchema } from './MetadataUnion';
import type { ModelName } from './ModelName';
import { ModelNameSchema } from './ModelName';
import type { NUnion } from './NUnion';
import { NUnionSchema } from './NUnion';
import type { PromptUnion } from './PromptUnion';
import { PromptUnionSchema } from './PromptUnion';
import type { ReasoningUnion } from './ReasoningUnion';
import { ReasoningUnionSchema } from './ReasoningUnion';
import type { ResponseFormatUnion2 } from './ResponseFormatUnion2';
import { ResponseFormatUnion2Schema } from './ResponseFormatUnion2';
import type { SeedUnion } from './SeedUnion';
import { SeedUnionSchema } from './SeedUnion';
import type { StopUnion2 } from './StopUnion2';
import { StopUnion2Schema } from './StopUnion2';
import type { StreamOptionsUnion2 } from './StreamOptionsUnion2';
import { StreamOptionsUnion2Schema } from './StreamOptionsUnion2';
import type { TemperatureUnion } from './TemperatureUnion';
import { TemperatureUnionSchema } from './TemperatureUnion';
import type { TopPUnion } from './TopPUnion';
import { TopPUnionSchema } from './TopPUnion';
export interface CompletionCreateParams {
  bestOf?: BestOfUnion;
  echo?: LogprobsUnion;
  frequencyPenalty?: FrequencyPenaltyUnion;
  logitBias?: LogitBiasUnion;
  logprobs?: LogprobsUnion4;
  maxTokens?: MaxTokensUnion;
  metadata?: MetadataUnion;
  model?: ModelName;
  models?: Array<ModelName>;
  n?: NUnion;
  presencePenalty?: FrequencyPenaltyUnion;
  prompt: PromptUnion;
  responseFormat?: ResponseFormatUnion2;
  seed?: SeedUnion;
  stop?: StopUnion2;
  stream?: boolean;
  streamOptions?: StreamOptionsUnion2;
  suffix?: ReasoningUnion;
  temperature?: TemperatureUnion;
  topP?: TopPUnion;
  user?: string;
}

export const CompletionCreateParamsSchema: TypedSchema<CompletionCreateParams> = typed<CompletionCreateParams>(object({
  get bestOf() { return optional(BestOfUnionSchema) },
  get echo() { return optional(LogprobsUnionSchema) },
  get frequencyPenalty() { return optional(FrequencyPenaltyUnionSchema) },
  get logitBias() { return optional(LogitBiasUnionSchema) },
  get logprobs() { return optional(LogprobsUnion4Schema) },
  get maxTokens() { return optional(MaxTokensUnionSchema) },
  get metadata() { return optional(MetadataUnionSchema) },
  get model() { return optional(ModelNameSchema) },
  get models() { return optional(array(ModelNameSchema)) },
  get n() { return optional(NUnionSchema) },
  get presencePenalty() { return optional(FrequencyPenaltyUnionSchema) },
  prompt: PromptUnionSchema,
  get responseFormat() { return optional(ResponseFormatUnion2Schema) },
  get seed() { return optional(SeedUnionSchema) },
  get stop() { return optional(StopUnion2Schema) },
  stream: optional(boolean()),
  get streamOptions() { return optional(StreamOptionsUnion2Schema) },
  get suffix() { return optional(ReasoningUnionSchema) },
  get temperature() { return optional(TemperatureUnionSchema) },
  get topP() { return optional(TopPUnionSchema) },
  user: optional(string()),
}));