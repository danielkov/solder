import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { StreamOptionsUnion2Object } from './StreamOptionsUnion2Object';
import { StreamOptionsUnion2ObjectSchema } from './StreamOptionsUnion2Object';
export type StreamOptionsUnion2 = StreamOptionsUnion2Object | any | null;

export const StreamOptionsUnion2Schema: TypedSchema<StreamOptionsUnion2> = typed<StreamOptionsUnion2>(union(StreamOptionsUnion2ObjectSchema, nullable(unknown())));