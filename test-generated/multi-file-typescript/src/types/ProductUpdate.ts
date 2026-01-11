import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { SpecificationsProperty } from './SpecificationsProperty';
import { SpecificationsPropertySchema } from './SpecificationsProperty';
/**
 * Request body for updating a product
 */
export interface ProductUpdate {
  description?: string;
  images?: Array<string>;
  inventory?: number;
  name?: string;
  price?: number;
  specifications?: SpecificationsProperty;
  status?: string;
  tags?: Array<string>;
}

export const ProductUpdateSchema: TypedSchema<ProductUpdate> = typed<ProductUpdate>(object({
  description: optional(string()),
  images: optional(array(string())),
  inventory: optional(number()),
  name: optional(string()),
  price: optional(number()),
  get specifications() { return optional(SpecificationsPropertySchema) },
  status: optional(string()),
  tags: optional(array(string())),
}));