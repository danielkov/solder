import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostAccountsRequestRegistrationDateObject } from './PostAccountsRequestRegistrationDateObject';
import { PostAccountsRequestRegistrationDateObjectSchema } from './PostAccountsRequestRegistrationDateObject';
export type PostAccountsRequestRegistrationDate = PostAccountsRequestRegistrationDateObject | string;

export const PostAccountsRequestRegistrationDateSchema: TypedSchema<PostAccountsRequestRegistrationDate> = typed<PostAccountsRequestRegistrationDate>(union(PostAccountsRequestRegistrationDateObjectSchema, string()));