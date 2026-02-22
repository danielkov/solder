import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestUsBankAccountObject } from './PostCustomersCustomerSubscriptionsRequestUsBankAccountObject';
import { PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectSchema } from './PostCustomersCustomerSubscriptionsRequestUsBankAccountObject';
export type PostCustomersCustomerSubscriptionsRequestUsBankAccount = PostCustomersCustomerSubscriptionsRequestUsBankAccountObject | string;

export const PostCustomersCustomerSubscriptionsRequestUsBankAccountSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestUsBankAccount> = typed<PostCustomersCustomerSubscriptionsRequestUsBankAccount>(union(PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectSchema, string()));
