import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * package_dimensions_specs
 *
 * The dimensions of this product for shipping purposes.
 */
export interface PostProductsRequestPackageDimensions {
  height: number;
  length: number;
  weight: number;
  width: number;
}

export const PostProductsRequestPackageDimensionsSchema: TypedSchema<PostProductsRequestPackageDimensions> = typed<PostProductsRequestPackageDimensions>(object({
  height: number(),
  length: number(),
  weight: number(),
  width: number(),
}));