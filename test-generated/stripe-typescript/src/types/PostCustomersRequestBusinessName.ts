import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostCustomersRequestBusinessName = string | string;

export const PostCustomersRequestBusinessNameSchema: TypedSchema<PostCustomersRequestBusinessName> = typed<PostCustomersRequestBusinessName>(union(string(), string()));