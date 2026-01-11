import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Charge } from './Charge';
import { ChargeSchema } from './Charge';
export type ChargeOrRef = string | Charge;

export const ChargeOrRefSchema: TypedSchema<ChargeOrRef> = typed<ChargeOrRef>(union(string(), ChargeSchema));