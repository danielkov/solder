import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { ClimateProduct } from './ClimateProduct';
import { ClimateProductSchema } from './ClimateProduct';
export type ProductOrRef = string | ClimateProduct;

export const ProductOrRefSchema: TypedSchema<ProductOrRef> = typed<ProductOrRef>(union(string(), ClimateProductSchema));