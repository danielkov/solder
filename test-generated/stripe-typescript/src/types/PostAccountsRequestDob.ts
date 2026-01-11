import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostAccountsRequestDobObject } from './PostAccountsRequestDobObject';
import { PostAccountsRequestDobObjectSchema } from './PostAccountsRequestDobObject';
export type PostAccountsRequestDob = PostAccountsRequestDobObject | string;

export const PostAccountsRequestDobSchema: TypedSchema<PostAccountsRequestDob> = typed<PostAccountsRequestDob>(union(PostAccountsRequestDobObjectSchema, string()));