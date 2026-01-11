import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type OpenAiResponsesIncludable = "file_search_call.results" | "message.input_image.image_url" | "computer_call_output.output.image_url" | "reasoning.encrypted_content" | "code_interpreter_call.outputs";

export const OpenAiResponsesIncludableSchema: TypedSchema<OpenAiResponsesIncludable> = typed<OpenAiResponsesIncludable>(union(
  literal("file_search_call.results"),
  literal("message.input_image.image_url"),
  literal("computer_call_output.output.image_url"),
  literal("reasoning.encrypted_content"),
  literal("code_interpreter_call.outputs"),
));

/**
 * Enum values for OpenAiResponsesIncludable.
 * Use these constants for type-safe comparisons.
 */
export const OpenAiResponsesIncludable = {
  FILE_SEARCH_CALL_RESULTS: "file_search_call.results" as const,
  MESSAGE_INPUT_IMAGE_IMAGE_URL: "message.input_image.image_url" as const,
  COMPUTER_CALL_OUTPUT_OUTPUT_IMAGE_URL: "computer_call_output.output.image_url" as const,
  REASONING_ENCRYPTED_CONTENT: "reasoning.encrypted_content" as const,
  CODE_INTERPRETER_CALL_OUTPUTS: "code_interpreter_call.outputs" as const,
} as const;