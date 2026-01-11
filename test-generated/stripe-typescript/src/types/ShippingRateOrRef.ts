import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { ShippingRate } from './ShippingRate';
import { ShippingRateSchema } from './ShippingRate';
export type ShippingRateOrRef = string | ShippingRate;

export const ShippingRateOrRefSchema: TypedSchema<ShippingRateOrRef> = typed<ShippingRateOrRef>(union(string(), ShippingRateSchema));