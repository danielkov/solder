import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Charge } from './Charge';
import { ChargeSchema } from './Charge';
export type OriginatingTransactionOrRef = string | Charge;

export const OriginatingTransactionOrRefSchema: TypedSchema<OriginatingTransactionOrRef> = typed<OriginatingTransactionOrRef>(union(string(), ChargeSchema));