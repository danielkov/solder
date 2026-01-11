import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { ChatStreamOptions } from './ChatStreamOptions';
import { ChatStreamOptionsSchema } from './ChatStreamOptions';
export type StreamOptionsUnion = ChatStreamOptions | any | null;

export const StreamOptionsUnionSchema: TypedSchema<StreamOptionsUnion> = typed<StreamOptionsUnion>(union(ChatStreamOptionsSchema, nullable(unknown())));