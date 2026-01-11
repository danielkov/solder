import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { FrequencyPenaltyUnion } from './FrequencyPenaltyUnion';
import { FrequencyPenaltyUnionSchema } from './FrequencyPenaltyUnion';
import type { LogitBiasUnion } from './LogitBiasUnion';
import { LogitBiasUnionSchema } from './LogitBiasUnion';
import type { LogprobsUnion } from './LogprobsUnion';
import { LogprobsUnionSchema } from './LogprobsUnion';
import type { MaxCompletionTokensUnion } from './MaxCompletionTokensUnion';
import { MaxCompletionTokensUnionSchema } from './MaxCompletionTokensUnion';
import type { Message } from './Message';
import { MessageSchema } from './Message';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { ModelName } from './ModelName';
import { ModelNameSchema } from './ModelName';
import type { ReasoningProperty } from './ReasoningProperty';
import { ReasoningPropertySchema } from './ReasoningProperty';
import type { ResponseFormatUnion } from './ResponseFormatUnion';
import { ResponseFormatUnionSchema } from './ResponseFormatUnion';
import type { SeedUnion } from './SeedUnion';
import { SeedUnionSchema } from './SeedUnion';
import type { StopUnion } from './StopUnion';
import { StopUnionSchema } from './StopUnion';
import type { StreamOptionsUnion } from './StreamOptionsUnion';
import { StreamOptionsUnionSchema } from './StreamOptionsUnion';
import type { TemperatureUnion } from './TemperatureUnion';
import { TemperatureUnionSchema } from './TemperatureUnion';
import type { ToolChoiceOption } from './ToolChoiceOption';
import { ToolChoiceOptionSchema } from './ToolChoiceOption';
import type { ToolDefinitionJson } from './ToolDefinitionJson';
import { ToolDefinitionJsonSchema } from './ToolDefinitionJson';
import type { TopLogprobsUnion } from './TopLogprobsUnion';
import { TopLogprobsUnionSchema } from './TopLogprobsUnion';
import type { TopPUnion } from './TopPUnion';
import { TopPUnionSchema } from './TopPUnion';
export interface ChatGenerationParams {
  frequencyPenalty?: FrequencyPenaltyUnion;
  logitBias?: LogitBiasUnion;
  logprobs?: LogprobsUnion;
  maxCompletionTokens?: MaxCompletionTokensUnion;
  maxTokens?: MaxCompletionTokensUnion;
  messages: Array<Message>;
  metadata?: MetadataProperty;
  model?: ModelName;
  models?: Array<ModelName>;
  presencePenalty?: FrequencyPenaltyUnion;
  reasoning?: ReasoningProperty;
  responseFormat?: ResponseFormatUnion;
  seed?: SeedUnion;
  stop?: StopUnion;
  stream?: boolean;
  streamOptions?: StreamOptionsUnion;
  temperature?: TemperatureUnion;
  toolChoice?: ToolChoiceOption;
  tools?: Array<ToolDefinitionJson>;
  topLogprobs?: TopLogprobsUnion;
  topP?: TopPUnion;
  user?: string;
}

export const ChatGenerationParamsSchema: TypedSchema<ChatGenerationParams> = typed<ChatGenerationParams>(object({
  get frequencyPenalty() { return optional(FrequencyPenaltyUnionSchema) },
  get logitBias() { return optional(LogitBiasUnionSchema) },
  get logprobs() { return optional(LogprobsUnionSchema) },
  get maxCompletionTokens() { return optional(MaxCompletionTokensUnionSchema) },
  get maxTokens() { return optional(MaxCompletionTokensUnionSchema) },
  messages: array(MessageSchema),
  get metadata() { return optional(MetadataPropertySchema) },
  get model() { return optional(ModelNameSchema) },
  get models() { return optional(array(ModelNameSchema)) },
  get presencePenalty() { return optional(FrequencyPenaltyUnionSchema) },
  get reasoning() { return optional(ReasoningPropertySchema) },
  get responseFormat() { return optional(ResponseFormatUnionSchema) },
  get seed() { return optional(SeedUnionSchema) },
  get stop() { return optional(StopUnionSchema) },
  stream: optional(boolean()),
  get streamOptions() { return optional(StreamOptionsUnionSchema) },
  get temperature() { return optional(TemperatureUnionSchema) },
  get toolChoice() { return optional(ToolChoiceOptionSchema) },
  get tools() { return optional(array(ToolDefinitionJsonSchema)) },
  get topLogprobs() { return optional(TopLogprobsUnionSchema) },
  get topP() { return optional(TopPUnionSchema) },
  user: optional(string()),
}));