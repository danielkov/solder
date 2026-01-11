import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { SpecificationsProperty } from './SpecificationsProperty';
import { SpecificationsPropertySchema } from './SpecificationsProperty';
/**
 * A product in the catalog
 */
export interface Product {
  /**
   * Product category
   */
  category: string;
  /**
   * Timestamp when the product was created
   */
  createdAt?: string;
  /**
   * Currency code
   */
  currency?: string;
  /**
   * Detailed product description
   */
  description?: string;
  /**
   * Unique identifier for the product
   */
  id: string;
  /**
   * Product image URLs
   */
  images?: Array<string>;
  /**
   * Current inventory count
   */
  inventory?: number;
  /**
   * Product name
   */
  name: string;
  /**
   * Product price in USD
   */
  price: number;
  /**
   * Stock Keeping Unit
   */
  sku: string;
  /**
   * Technical specifications
   */
  specifications?: SpecificationsProperty;
  /**
   * Product availability status
   */
  status: string;
  /**
   * Product tags for search and filtering
   */
  tags?: Array<string>;
  /**
   * Timestamp when the product was last updated
   */
  updatedAt?: string;
}

export const ProductSchema: TypedSchema<Product> = typed<Product>(object({
  category: string(),
  createdAt: optional(string()),
  currency: optional(string()),
  description: optional(string()),
  id: string(),
  images: optional(array(string())),
  inventory: optional(number()),
  name: string(),
  price: number(),
  sku: string(),
  get specifications() { return optional(SpecificationsPropertySchema) },
  status: string(),
  tags: optional(array(string())),
  updatedAt: optional(string()),
}));