import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { BillingMeter } from './BillingMeter';
import { BillingMeterSchema } from './BillingMeter';
export type MeterOrRef = string | BillingMeter;

export const MeterOrRefSchema: TypedSchema<MeterOrRef> = typed<MeterOrRef>(union(string(), BillingMeterSchema));