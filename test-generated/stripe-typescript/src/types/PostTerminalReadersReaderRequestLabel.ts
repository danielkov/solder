import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostTerminalReadersReaderRequestLabel = string | string;

export const PostTerminalReadersReaderRequestLabelSchema: TypedSchema<PostTerminalReadersReaderRequestLabel> = typed<PostTerminalReadersReaderRequestLabel>(union(string(), string()));