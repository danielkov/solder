import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
 */
export type PostProductsIdRequestImages = Array<string> | string;

export const PostProductsIdRequestImagesSchema: TypedSchema<PostProductsIdRequestImages> = typed<PostProductsIdRequestImages>(union(array(string()), string()));
