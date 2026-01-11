import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { NamedToolChoice } from './NamedToolChoice';
import { NamedToolChoiceSchema } from './NamedToolChoice';
export type ToolChoiceOption = string | string | string | NamedToolChoice;

export const ToolChoiceOptionSchema: TypedSchema<ToolChoiceOption> = typed<ToolChoiceOption>(union(string(), string(), string(), NamedToolChoiceSchema));