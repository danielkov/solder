import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type Parameter = "temperature" | "top_p" | "top_k" | "min_p" | "top_a" | "frequency_penalty" | "presence_penalty" | "repetition_penalty" | "max_tokens" | "logit_bias" | "logprobs" | "top_logprobs" | "seed" | "response_format" | "structured_outputs" | "stop" | "tools" | "tool_choice" | "parallel_tool_calls" | "include_reasoning" | "reasoning" | "web_search_options" | "verbosity";

export const ParameterSchema: TypedSchema<Parameter> = typed<Parameter>(union(
  literal("temperature"),
  literal("top_p"),
  literal("top_k"),
  literal("min_p"),
  literal("top_a"),
  literal("frequency_penalty"),
  literal("presence_penalty"),
  literal("repetition_penalty"),
  literal("max_tokens"),
  literal("logit_bias"),
  literal("logprobs"),
  literal("top_logprobs"),
  literal("seed"),
  literal("response_format"),
  literal("structured_outputs"),
  literal("stop"),
  literal("tools"),
  literal("tool_choice"),
  literal("parallel_tool_calls"),
  literal("include_reasoning"),
  literal("reasoning"),
  literal("web_search_options"),
  literal("verbosity"),
));

/**
 * Enum values for Parameter.
 * Use these constants for type-safe comparisons.
 */
export const Parameter = {
  TEMPERATURE: "temperature" as const,
  TOP_P: "top_p" as const,
  TOP_K: "top_k" as const,
  MIN_P: "min_p" as const,
  TOP_A: "top_a" as const,
  FREQUENCY_PENALTY: "frequency_penalty" as const,
  PRESENCE_PENALTY: "presence_penalty" as const,
  REPETITION_PENALTY: "repetition_penalty" as const,
  MAX_TOKENS: "max_tokens" as const,
  LOGIT_BIAS: "logit_bias" as const,
  LOGPROBS: "logprobs" as const,
  TOP_LOGPROBS: "top_logprobs" as const,
  SEED: "seed" as const,
  RESPONSE_FORMAT: "response_format" as const,
  STRUCTURED_OUTPUTS: "structured_outputs" as const,
  STOP: "stop" as const,
  TOOLS: "tools" as const,
  TOOL_CHOICE: "tool_choice" as const,
  PARALLEL_TOOL_CALLS: "parallel_tool_calls" as const,
  INCLUDE_REASONING: "include_reasoning" as const,
  REASONING: "reasoning" as const,
  WEB_SEARCH_OPTIONS: "web_search_options" as const,
  VERBOSITY: "verbosity" as const,
} as const;