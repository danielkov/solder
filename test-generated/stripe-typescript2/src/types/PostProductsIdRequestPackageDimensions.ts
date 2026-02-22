import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostProductsIdRequestPackageDimensionsObject } from './PostProductsIdRequestPackageDimensionsObject';
import { PostProductsIdRequestPackageDimensionsObjectSchema } from './PostProductsIdRequestPackageDimensionsObject';
/**
 * The dimensions of this product for shipping purposes.
 */
export type PostProductsIdRequestPackageDimensions = PostProductsIdRequestPackageDimensionsObject | string;

export const PostProductsIdRequestPackageDimensionsSchema: TypedSchema<PostProductsIdRequestPackageDimensions> = typed<PostProductsIdRequestPackageDimensions>(union(PostProductsIdRequestPackageDimensionsObjectSchema, string()));
