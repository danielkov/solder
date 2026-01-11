import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { ResponseFormatUnion } from './ResponseFormatUnion';
import { ResponseFormatUnionSchema } from './ResponseFormatUnion';
export type ResponseFormatUnion2 = ResponseFormatUnion | any | null;

export const ResponseFormatUnion2Schema: TypedSchema<ResponseFormatUnion2> = typed<ResponseFormatUnion2>(union(ResponseFormatUnionSchema, nullable(unknown())));