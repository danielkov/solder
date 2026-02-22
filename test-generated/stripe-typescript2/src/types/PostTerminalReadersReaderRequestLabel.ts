import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The new label of the reader.
 */
export type PostTerminalReadersReaderRequestLabel = string | string;

export const PostTerminalReadersReaderRequestLabelSchema: TypedSchema<PostTerminalReadersReaderRequestLabel> = typed<PostTerminalReadersReaderRequestLabel>(union(string(), string()));
