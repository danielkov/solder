import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostAccountsRequestDobObject } from './PostAccountsRequestDobObject';
import { PostAccountsRequestDobObjectSchema } from './PostAccountsRequestDobObject';
export type PostAccountsAccountPeopleRequestDob = PostAccountsRequestDobObject | string;

export const PostAccountsAccountPeopleRequestDobSchema: TypedSchema<PostAccountsAccountPeopleRequestDob> = typed<PostAccountsAccountPeopleRequestDob>(union(PostAccountsRequestDobObjectSchema, string()));