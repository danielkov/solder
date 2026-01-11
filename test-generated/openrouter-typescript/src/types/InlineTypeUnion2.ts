import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { OpenResponsesEasyInputMessage } from './OpenResponsesEasyInputMessage';
import { OpenResponsesEasyInputMessageSchema } from './OpenResponsesEasyInputMessage';
import type { OpenResponsesFunctionCallOutput } from './OpenResponsesFunctionCallOutput';
import { OpenResponsesFunctionCallOutputSchema } from './OpenResponsesFunctionCallOutput';
import type { OpenResponsesFunctionToolCall } from './OpenResponsesFunctionToolCall';
import { OpenResponsesFunctionToolCallSchema } from './OpenResponsesFunctionToolCall';
import type { OpenResponsesInputMessageItem } from './OpenResponsesInputMessageItem';
import { OpenResponsesInputMessageItemSchema } from './OpenResponsesInputMessageItem';
import type { OpenResponsesReasoning } from './OpenResponsesReasoning';
import { OpenResponsesReasoningSchema } from './OpenResponsesReasoning';
import type { ResponsesImageGenerationCall } from './ResponsesImageGenerationCall';
import { ResponsesImageGenerationCallSchema } from './ResponsesImageGenerationCall';
import type { ResponsesOutputItemFileSearchCall } from './ResponsesOutputItemFileSearchCall';
import { ResponsesOutputItemFileSearchCallSchema } from './ResponsesOutputItemFileSearchCall';
import type { ResponsesOutputItemFunctionCall } from './ResponsesOutputItemFunctionCall';
import { ResponsesOutputItemFunctionCallSchema } from './ResponsesOutputItemFunctionCall';
import type { ResponsesOutputItemReasoning } from './ResponsesOutputItemReasoning';
import { ResponsesOutputItemReasoningSchema } from './ResponsesOutputItemReasoning';
import type { ResponsesOutputMessage } from './ResponsesOutputMessage';
import { ResponsesOutputMessageSchema } from './ResponsesOutputMessage';
import type { ResponsesWebSearchCallOutput } from './ResponsesWebSearchCallOutput';
import { ResponsesWebSearchCallOutputSchema } from './ResponsesWebSearchCallOutput';
export type InlineTypeUnion2 = OpenResponsesReasoning | OpenResponsesEasyInputMessage | OpenResponsesInputMessageItem | OpenResponsesFunctionToolCall | OpenResponsesFunctionCallOutput | ResponsesOutputMessage | ResponsesOutputItemReasoning | ResponsesOutputItemFunctionCall | ResponsesWebSearchCallOutput | ResponsesOutputItemFileSearchCall | ResponsesImageGenerationCall;

export const InlineTypeUnion2Schema: TypedSchema<InlineTypeUnion2> = typed<InlineTypeUnion2>(union(OpenResponsesReasoningSchema, OpenResponsesEasyInputMessageSchema, OpenResponsesInputMessageItemSchema, OpenResponsesFunctionToolCallSchema, OpenResponsesFunctionCallOutputSchema, ResponsesOutputMessageSchema, ResponsesOutputItemReasoningSchema, ResponsesOutputItemFunctionCallSchema, ResponsesWebSearchCallOutputSchema, ResponsesOutputItemFileSearchCallSchema, ResponsesImageGenerationCallSchema));