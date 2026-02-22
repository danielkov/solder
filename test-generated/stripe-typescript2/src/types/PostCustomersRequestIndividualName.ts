import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The customer's full name. This may be up to *150 characters*.
 */
export type PostCustomersRequestIndividualName = string | string;

export const PostCustomersRequestIndividualNameSchema: TypedSchema<PostCustomersRequestIndividualName> = typed<PostCustomersRequestIndividualName>(union(string(), string()));
