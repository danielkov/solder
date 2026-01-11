import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { ResponseFormatJsonSchema } from './ResponseFormatJsonSchema';
import { ResponseFormatJsonSchemaSchema } from './ResponseFormatJsonSchema';
import type { ResponseFormatTextGrammar } from './ResponseFormatTextGrammar';
import { ResponseFormatTextGrammarSchema } from './ResponseFormatTextGrammar';
import type { ResponseFormatUnionObject } from './ResponseFormatUnionObject';
import { ResponseFormatUnionObjectSchema } from './ResponseFormatUnionObject';
import type { ResponseFormatUnionObject2 } from './ResponseFormatUnionObject2';
import { ResponseFormatUnionObject2Schema } from './ResponseFormatUnionObject2';
import type { ResponseFormatUnionObject3 } from './ResponseFormatUnionObject3';
import { ResponseFormatUnionObject3Schema } from './ResponseFormatUnionObject3';
export type ResponseFormatUnion = ResponseFormatUnionObject | ResponseFormatUnionObject2 | ResponseFormatJsonSchema | ResponseFormatTextGrammar | ResponseFormatUnionObject3;

export const ResponseFormatUnionSchema: TypedSchema<ResponseFormatUnion> = typed<ResponseFormatUnion>(union(ResponseFormatUnionObjectSchema, ResponseFormatUnionObject2Schema, ResponseFormatJsonSchemaSchema, ResponseFormatTextGrammarSchema, ResponseFormatUnionObject3Schema));