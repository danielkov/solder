import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { InlineTypeObject4 } from './InlineTypeObject4';
import { InlineTypeObject4Schema } from './InlineTypeObject4';
import type { InlineTypeObject5 } from './InlineTypeObject5';
import { InlineTypeObject5Schema } from './InlineTypeObject5';
export type OpenAiResponsesToolChoice = string | string | string | InlineTypeObject4 | InlineTypeObject5;

export const OpenAiResponsesToolChoiceSchema: TypedSchema<OpenAiResponsesToolChoice> = typed<OpenAiResponsesToolChoice>(union(string(), string(), string(), InlineTypeObject4Schema, InlineTypeObject5Schema));