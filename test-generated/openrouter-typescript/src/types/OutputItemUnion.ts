import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { OutputItemFileSearchCall } from './OutputItemFileSearchCall';
import { OutputItemFileSearchCallSchema } from './OutputItemFileSearchCall';
import type { OutputItemFunctionCall } from './OutputItemFunctionCall';
import { OutputItemFunctionCallSchema } from './OutputItemFunctionCall';
import type { OutputItemImageGenerationCall } from './OutputItemImageGenerationCall';
import { OutputItemImageGenerationCallSchema } from './OutputItemImageGenerationCall';
import type { OutputItemReasoning } from './OutputItemReasoning';
import { OutputItemReasoningSchema } from './OutputItemReasoning';
import type { OutputItemWebSearchCall } from './OutputItemWebSearchCall';
import { OutputItemWebSearchCallSchema } from './OutputItemWebSearchCall';
import type { OutputMessage } from './OutputMessage';
import { OutputMessageSchema } from './OutputMessage';
export type OutputItemUnion = OutputMessage | OutputItemReasoning | OutputItemFunctionCall | OutputItemWebSearchCall | OutputItemFileSearchCall | OutputItemImageGenerationCall;

export const OutputItemUnionSchema: TypedSchema<OutputItemUnion> = typed<OutputItemUnion>(union(OutputMessageSchema, OutputItemReasoningSchema, OutputItemFunctionCallSchema, OutputItemWebSearchCallSchema, OutputItemFileSearchCallSchema, OutputItemImageGenerationCallSchema));