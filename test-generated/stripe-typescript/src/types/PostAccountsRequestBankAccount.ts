import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostAccountsRequestBankAccountObject } from './PostAccountsRequestBankAccountObject';
import { PostAccountsRequestBankAccountObjectSchema } from './PostAccountsRequestBankAccountObject';
export type PostAccountsRequestBankAccount = PostAccountsRequestBankAccountObject | string;

export const PostAccountsRequestBankAccountSchema: TypedSchema<PostAccountsRequestBankAccount> = typed<PostAccountsRequestBankAccount>(union(PostAccountsRequestBankAccountObjectSchema, string()));