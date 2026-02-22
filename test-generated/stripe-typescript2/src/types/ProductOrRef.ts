import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { ClimateProduct } from './ClimateProduct';
import { ClimateProductSchema } from './ClimateProduct';
/**
 * Unique ID for the Climate `Product` this order is purchasing.
 */
export type ProductOrRef = string | ClimateProduct;

export const ProductOrRefSchema: TypedSchema<ProductOrRef> = typed<ProductOrRef>(union(string(), ClimateProductSchema));
