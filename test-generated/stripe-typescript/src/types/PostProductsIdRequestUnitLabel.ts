import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostProductsIdRequestUnitLabel = string | string;

export const PostProductsIdRequestUnitLabelSchema: TypedSchema<PostProductsIdRequestUnitLabel> = typed<PostProductsIdRequestUnitLabel>(union(string(), string()));