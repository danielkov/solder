import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * package_dimensions_specs
 */
export interface PostProductsIdRequestPackageDimensionsObject {
  height: number;
  length: number;
  weight: number;
  width: number;
}

export const PostProductsIdRequestPackageDimensionsObjectSchema: TypedSchema<PostProductsIdRequestPackageDimensionsObject> = typed<PostProductsIdRequestPackageDimensionsObject>(object({
  height: number(),
  length: number(),
  weight: number(),
  width: number(),
}));