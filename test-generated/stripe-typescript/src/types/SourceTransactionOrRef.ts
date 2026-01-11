import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Charge } from './Charge';
import { ChargeSchema } from './Charge';
export type SourceTransactionOrRef = string | Charge;

export const SourceTransactionOrRefSchema: TypedSchema<SourceTransactionOrRef> = typed<SourceTransactionOrRef>(union(string(), ChargeSchema));