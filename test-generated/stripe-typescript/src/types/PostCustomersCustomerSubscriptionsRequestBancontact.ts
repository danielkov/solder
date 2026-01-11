import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestBancontactObject } from './PostCustomersCustomerSubscriptionsRequestBancontactObject';
import { PostCustomersCustomerSubscriptionsRequestBancontactObjectSchema } from './PostCustomersCustomerSubscriptionsRequestBancontactObject';
export type PostCustomersCustomerSubscriptionsRequestBancontact = PostCustomersCustomerSubscriptionsRequestBancontactObject | string;

export const PostCustomersCustomerSubscriptionsRequestBancontactSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestBancontact> = typed<PostCustomersCustomerSubscriptionsRequestBancontact>(union(PostCustomersCustomerSubscriptionsRequestBancontactObjectSchema, string()));