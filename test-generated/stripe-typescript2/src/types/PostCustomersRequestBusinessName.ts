import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The customer's business name. This may be up to *150 characters*.
 */
export type PostCustomersRequestBusinessName = string | string;

export const PostCustomersRequestBusinessNameSchema: TypedSchema<PostCustomersRequestBusinessName> = typed<PostCustomersRequestBusinessName>(union(string(), string()));
