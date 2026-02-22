import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type PostAccountsRequestSupportUrl = string | string;

export const PostAccountsRequestSupportUrlSchema: TypedSchema<PostAccountsRequestSupportUrl> = typed<PostAccountsRequestSupportUrl>(union(string(), string()));
