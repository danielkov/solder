import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostAccountsRequestBankAccountObject } from './PostAccountsRequestBankAccountObject';
import { PostAccountsRequestBankAccountObjectSchema } from './PostAccountsRequestBankAccountObject';
/**
 * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
 */
export type PostAccountsRequestBankAccount = PostAccountsRequestBankAccountObject | string;

export const PostAccountsRequestBankAccountSchema: TypedSchema<PostAccountsRequestBankAccount> = typed<PostAccountsRequestBankAccount>(union(PostAccountsRequestBankAccountObjectSchema, string()));
