import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Mandate } from './Mandate';
import { MandateSchema } from './Mandate';
export type SingleUseMandateOrRef = string | Mandate;

export const SingleUseMandateOrRefSchema: TypedSchema<SingleUseMandateOrRef> = typed<SingleUseMandateOrRef>(union(string(), MandateSchema));