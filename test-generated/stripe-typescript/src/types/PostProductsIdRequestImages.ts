import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostProductsIdRequestImages = Array<string> | string;

export const PostProductsIdRequestImagesSchema: TypedSchema<PostProductsIdRequestImages> = typed<PostProductsIdRequestImages>(union(array(string()), string()));