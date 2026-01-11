import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostCustomersRequestIndividualName = string | string;

export const PostCustomersRequestIndividualNameSchema: TypedSchema<PostCustomersRequestIndividualName> = typed<PostCustomersRequestIndividualName>(union(string(), string()));