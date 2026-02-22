import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { BillingMeter } from './BillingMeter';
import { BillingMeterSchema } from './BillingMeter';
/**
 * The [Billing Meter](/api/billing/meter) ID whose usage is monitored.
 */
export type MeterOrRef = string | BillingMeter;

export const MeterOrRefSchema: TypedSchema<MeterOrRef> = typed<MeterOrRef>(union(string(), BillingMeterSchema));
