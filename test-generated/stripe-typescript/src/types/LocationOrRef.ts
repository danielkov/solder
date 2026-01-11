import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { TerminalLocation } from './TerminalLocation';
import { TerminalLocationSchema } from './TerminalLocation';
export type LocationOrRef = string | TerminalLocation;

export const LocationOrRefSchema: TypedSchema<LocationOrRef> = typed<LocationOrRef>(union(string(), TerminalLocationSchema));