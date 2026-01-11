import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Mandate } from './Mandate';
import { MandateSchema } from './Mandate';
export type MandateOrRef = string | Mandate;

export const MandateOrRefSchema: TypedSchema<MandateOrRef> = typed<MandateOrRef>(union(string(), MandateSchema));