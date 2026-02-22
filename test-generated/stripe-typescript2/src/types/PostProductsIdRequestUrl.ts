import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A URL of a publicly-accessible webpage for this product.
 */
export type PostProductsIdRequestUrl = string | string;

export const PostProductsIdRequestUrlSchema: TypedSchema<PostProductsIdRequestUrl> = typed<PostProductsIdRequestUrl>(union(string(), string()));
