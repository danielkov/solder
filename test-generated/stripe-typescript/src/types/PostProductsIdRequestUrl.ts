import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostProductsIdRequestUrl = string | string;

export const PostProductsIdRequestUrlSchema: TypedSchema<PostProductsIdRequestUrl> = typed<PostProductsIdRequestUrl>(union(string(), string()));