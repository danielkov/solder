import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type InlineTypeObject5Type = string | string;

export const InlineTypeObject5TypeSchema: TypedSchema<InlineTypeObject5Type> = typed<InlineTypeObject5Type>(union(string(), string()));
