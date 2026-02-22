import { array, nullable, number, typed, union, unknown } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type BytesUnion = Array<number> | any | null;

export const BytesUnionSchema: TypedSchema<BytesUnion> = typed<BytesUnion>(union(array(number()), nullable(unknown())));
