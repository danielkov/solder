import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostProductsIdRequestPackageDimensionsObject } from './PostProductsIdRequestPackageDimensionsObject';
import { PostProductsIdRequestPackageDimensionsObjectSchema } from './PostProductsIdRequestPackageDimensionsObject';
export type PostProductsIdRequestPackageDimensions = PostProductsIdRequestPackageDimensionsObject | string;

export const PostProductsIdRequestPackageDimensionsSchema: TypedSchema<PostProductsIdRequestPackageDimensions> = typed<PostProductsIdRequestPackageDimensions>(union(PostProductsIdRequestPackageDimensionsObjectSchema, string()));