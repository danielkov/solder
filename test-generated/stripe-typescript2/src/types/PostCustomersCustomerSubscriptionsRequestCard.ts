import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestCardObject } from './PostCustomersCustomerSubscriptionsRequestCardObject';
import { PostCustomersCustomerSubscriptionsRequestCardObjectSchema } from './PostCustomersCustomerSubscriptionsRequestCardObject';
export type PostCustomersCustomerSubscriptionsRequestCard = PostCustomersCustomerSubscriptionsRequestCardObject | string;

export const PostCustomersCustomerSubscriptionsRequestCardSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestCard> = typed<PostCustomersCustomerSubscriptionsRequestCard>(union(PostCustomersCustomerSubscriptionsRequestCardObjectSchema, string()));
