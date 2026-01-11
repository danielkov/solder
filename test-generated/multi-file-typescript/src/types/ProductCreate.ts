import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { SpecificationsProperty } from './SpecificationsProperty';
import { SpecificationsPropertySchema } from './SpecificationsProperty';
/**
 * Request body for creating a new product
 */
export interface ProductCreate {
  category: string;
  currency?: string;
  description?: string;
  images?: Array<string>;
  inventory?: number;
  name: string;
  price: number;
  sku: string;
  specifications?: SpecificationsProperty;
  tags?: Array<string>;
}

export const ProductCreateSchema: TypedSchema<ProductCreate> = typed<ProductCreate>(object({
  category: string(),
  currency: optional(string()),
  description: optional(string()),
  images: optional(array(string())),
  inventory: optional(number()),
  name: string(),
  price: number(),
  sku: string(),
  get specifications() { return optional(SpecificationsPropertySchema) },
  tags: optional(array(string())),
}));