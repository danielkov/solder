import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostAccountsRequestDobObject } from './PostAccountsRequestDobObject';
import { PostAccountsRequestDobObjectSchema } from './PostAccountsRequestDobObject';
/**
 * The person's date of birth.
 */
export type PostAccountsAccountPeopleRequestDob = PostAccountsRequestDobObject | string;

export const PostAccountsAccountPeopleRequestDobSchema: TypedSchema<PostAccountsAccountPeopleRequestDob> = typed<PostAccountsAccountPeopleRequestDob>(union(PostAccountsRequestDobObjectSchema, string()));
