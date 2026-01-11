import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { DeletedProduct } from './DeletedProduct';
import { DeletedProductSchema } from './DeletedProduct';
import type { Product } from './Product';
import { ProductSchema } from './Product';
export type ProductUnion = string | Product | DeletedProduct;

export const ProductUnionSchema: TypedSchema<ProductUnion> = typed<ProductUnion>(union(string(), ProductSchema, DeletedProductSchema));