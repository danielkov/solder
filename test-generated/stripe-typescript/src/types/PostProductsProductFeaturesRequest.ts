import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostProductsProductFeaturesRequest {
  /**
   * The ID of the [Feature](https://stripe.com/docs/api/entitlements/feature) object attached to this product.
   */
  entitlementFeature: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostProductsProductFeaturesRequestSchema: TypedSchema<PostProductsProductFeaturesRequest> = typed<PostProductsProductFeaturesRequest>(object({
  entitlementFeature: string(),
  expand: optional(array(string())),
}));