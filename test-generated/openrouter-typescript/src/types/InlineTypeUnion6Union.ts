import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { OpenAiResponsesRefusalContent } from './OpenAiResponsesRefusalContent';
import { OpenAiResponsesRefusalContentSchema } from './OpenAiResponsesRefusalContent';
import type { ReasoningTextContent } from './ReasoningTextContent';
import { ReasoningTextContentSchema } from './ReasoningTextContent';
import type { ResponseOutputText } from './ResponseOutputText';
import { ResponseOutputTextSchema } from './ResponseOutputText';
export type InlineTypeUnion6Union = ResponseOutputText | ReasoningTextContent | OpenAiResponsesRefusalContent;

export const InlineTypeUnion6UnionSchema: TypedSchema<InlineTypeUnion6Union> = typed<InlineTypeUnion6Union>(union(ResponseOutputTextSchema, ReasoningTextContentSchema, OpenAiResponsesRefusalContentSchema));