import { nullable, number, typed, union, unknown } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type NUnion = number | any | null;

export const NUnionSchema: TypedSchema<NUnion> = typed<NUnion>(union(number(), nullable(unknown())));
