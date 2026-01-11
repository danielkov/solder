import { TypedSchema, array, number, object, typed } from '@speakeasy-api/tonic';

import type { Product } from './Product';
import { ProductSchema } from './Product';
/**
 * Paginated list of products
 */
export interface ProductList {
  data: Array<Product>;
  page: number;
  pageSize: number;
  total: number;
}

export const ProductListSchema: TypedSchema<ProductList> = typed<ProductList>(object({
  data: array(ProductSchema),
  page: number(),
  pageSize: number(),
  total: number(),
}));