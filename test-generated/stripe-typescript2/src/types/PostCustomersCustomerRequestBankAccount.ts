import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerRequestBankAccountObject } from './PostCustomersCustomerRequestBankAccountObject';
import { PostCustomersCustomerRequestBankAccountObjectSchema } from './PostCustomersCustomerRequestBankAccountObject';
/**
 * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
 */
export type PostCustomersCustomerRequestBankAccount = PostCustomersCustomerRequestBankAccountObject | string;

export const PostCustomersCustomerRequestBankAccountSchema: TypedSchema<PostCustomersCustomerRequestBankAccount> = typed<PostCustomersCustomerRequestBankAccount>(union(PostCustomersCustomerRequestBankAccountObjectSchema, string()));
