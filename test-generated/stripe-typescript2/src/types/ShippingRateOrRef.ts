import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { ShippingRate } from './ShippingRate';
import { ShippingRateSchema } from './ShippingRate';
/**
 * The ID of the ShippingRate for this invoice.
 */
export type ShippingRateOrRef = string | ShippingRate;

export const ShippingRateOrRefSchema: TypedSchema<ShippingRateOrRef> = typed<ShippingRateOrRef>(union(string(), ShippingRateSchema));
