import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { OpenAiResponsesRefusalContent } from './OpenAiResponsesRefusalContent';
import { OpenAiResponsesRefusalContentSchema } from './OpenAiResponsesRefusalContent';
import type { ResponseOutputText } from './ResponseOutputText';
import { ResponseOutputTextSchema } from './ResponseOutputText';
export type PartUnion = ResponseOutputText | OpenAiResponsesRefusalContent;

export const PartUnionSchema: TypedSchema<PartUnion> = typed<PartUnion>(union(ResponseOutputTextSchema, OpenAiResponsesRefusalContentSchema));