import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { DeletedTerminalReader } from './DeletedTerminalReader';
import { DeletedTerminalReaderSchema } from './DeletedTerminalReader';
import type { TerminalReader } from './TerminalReader';
import { TerminalReaderSchema } from './TerminalReader';
export type GetTerminalReadersReaderUnion = TerminalReader | DeletedTerminalReader;

export const GetTerminalReadersReaderUnionSchema: TypedSchema<GetTerminalReadersReaderUnion> = typed<GetTerminalReadersReaderUnion>(union(TerminalReaderSchema, DeletedTerminalReaderSchema));