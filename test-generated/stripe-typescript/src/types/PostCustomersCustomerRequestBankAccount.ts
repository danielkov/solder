import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerRequestBankAccountObject } from './PostCustomersCustomerRequestBankAccountObject';
import { PostCustomersCustomerRequestBankAccountObjectSchema } from './PostCustomersCustomerRequestBankAccountObject';
export type PostCustomersCustomerRequestBankAccount = PostCustomersCustomerRequestBankAccountObject | string;

export const PostCustomersCustomerRequestBankAccountSchema: TypedSchema<PostCustomersCustomerRequestBankAccount> = typed<PostCustomersCustomerRequestBankAccount>(union(PostCustomersCustomerRequestBankAccountObjectSchema, string()));