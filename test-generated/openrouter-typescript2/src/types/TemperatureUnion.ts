import { nullable, number, typed, union, unknown } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type TemperatureUnion = number | any | null;

export const TemperatureUnionSchema: TypedSchema<TemperatureUnion> = typed<TemperatureUnion>(union(number(), nullable(unknown())));
