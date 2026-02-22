import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCustomersRequestShippingObject } from './PostCustomersRequestShippingObject';
import { PostCustomersRequestShippingObjectSchema } from './PostCustomersRequestShippingObject';
/**
 * The customer's shipping information. Appears on invoices emailed to this customer.
 */
export type PostCustomersRequestShipping = PostCustomersRequestShippingObject | string;

export const PostCustomersRequestShippingSchema: TypedSchema<PostCustomersRequestShipping> = typed<PostCustomersRequestShipping>(union(PostCustomersRequestShippingObjectSchema, string()));
