import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { TerminalLocation } from './TerminalLocation';
import { TerminalLocationSchema } from './TerminalLocation';
/**
 * The location identifier of the reader.
 */
export type LocationOrRef = string | TerminalLocation;

export const LocationOrRefSchema: TypedSchema<LocationOrRef> = typed<LocationOrRef>(union(string(), TerminalLocationSchema));
