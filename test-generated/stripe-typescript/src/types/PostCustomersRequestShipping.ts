import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCustomersRequestShippingObject } from './PostCustomersRequestShippingObject';
import { PostCustomersRequestShippingObjectSchema } from './PostCustomersRequestShippingObject';
export type PostCustomersRequestShipping = PostCustomersRequestShippingObject | string;

export const PostCustomersRequestShippingSchema: TypedSchema<PostCustomersRequestShipping> = typed<PostCustomersRequestShipping>(union(PostCustomersRequestShippingObjectSchema, string()));