import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Charge } from './Charge';
import { ChargeSchema } from './Charge';
export type LatestChargeOrRef = string | Charge;

export const LatestChargeOrRefSchema: TypedSchema<LatestChargeOrRef> = typed<LatestChargeOrRef>(union(string(), ChargeSchema));