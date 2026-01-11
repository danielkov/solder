import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Charge } from './Charge';
import { ChargeSchema } from './Charge';
export type DestinationPaymentOrRef = string | Charge;

export const DestinationPaymentOrRefSchema: TypedSchema<DestinationPaymentOrRef> = typed<DestinationPaymentOrRef>(union(string(), ChargeSchema));