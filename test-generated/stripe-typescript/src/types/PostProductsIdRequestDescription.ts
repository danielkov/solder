import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostProductsIdRequestDescription = string | string;

export const PostProductsIdRequestDescriptionSchema: TypedSchema<PostProductsIdRequestDescription> = typed<PostProductsIdRequestDescription>(union(string(), string()));