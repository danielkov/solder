import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { ProductFeature } from './ProductFeature';
import { ProductFeatureSchema } from './ProductFeature';
/**
 * EntitlementsResourceProductFeatureList
 *
 * 
 */
export interface GetProductsProductFeaturesResponse {
  data: Array<ProductFeature>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const GetProductsProductFeaturesResponseSchema: TypedSchema<GetProductsProductFeaturesResponse> = typed<GetProductsProductFeaturesResponse>(object({
  data: array(ProductFeatureSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));