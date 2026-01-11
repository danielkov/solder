import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { DeletedTerminalLocation } from './DeletedTerminalLocation';
import { DeletedTerminalLocationSchema } from './DeletedTerminalLocation';
import type { TerminalLocation } from './TerminalLocation';
import { TerminalLocationSchema } from './TerminalLocation';
export type GetTerminalLocationsLocationUnion = TerminalLocation | DeletedTerminalLocation;

export const GetTerminalLocationsLocationUnionSchema: TypedSchema<GetTerminalLocationsLocationUnion> = typed<GetTerminalLocationsLocationUnion>(union(TerminalLocationSchema, DeletedTerminalLocationSchema));