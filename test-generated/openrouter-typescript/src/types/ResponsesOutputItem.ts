import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

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
export type ResponsesOutputItem = ResponsesOutputMessage | ResponsesOutputItemReasoning | ResponsesOutputItemFunctionCall | ResponsesWebSearchCallOutput | ResponsesOutputItemFileSearchCall | ResponsesImageGenerationCall;

export const ResponsesOutputItemSchema: TypedSchema<ResponsesOutputItem> = typed<ResponsesOutputItem>(union(ResponsesOutputMessageSchema, ResponsesOutputItemReasoningSchema, ResponsesOutputItemFunctionCallSchema, ResponsesWebSearchCallOutputSchema, ResponsesOutputItemFileSearchCallSchema, ResponsesImageGenerationCallSchema));