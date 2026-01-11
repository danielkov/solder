import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestAcssDebitObject } from './PostCustomersCustomerSubscriptionsRequestAcssDebitObject';
import { PostCustomersCustomerSubscriptionsRequestAcssDebitObjectSchema } from './PostCustomersCustomerSubscriptionsRequestAcssDebitObject';
export type PostCustomersCustomerSubscriptionsRequestAcssDebit = PostCustomersCustomerSubscriptionsRequestAcssDebitObject | string;

export const PostCustomersCustomerSubscriptionsRequestAcssDebitSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestAcssDebit> = typed<PostCustomersCustomerSubscriptionsRequestAcssDebit>(union(PostCustomersCustomerSubscriptionsRequestAcssDebitObjectSchema, string()));