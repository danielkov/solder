import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * ProductMarketingFeature
 *
 * 
 */
export interface ProductMarketingFeature {
  /**
   * The marketing feature name. Up to 80 characters long.
   */
  name?: string;
}

export const ProductMarketingFeatureSchema: TypedSchema<ProductMarketingFeature> = typed<ProductMarketingFeature>(object({
  name: optional(string()),
}));