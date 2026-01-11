import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCustomersRequestShippingObject } from './PostCustomersRequestShippingObject';
import { PostCustomersRequestShippingObjectSchema } from './PostCustomersRequestShippingObject';
export type PostInvoicesCreatePreviewRequestShipping = PostCustomersRequestShippingObject | string;

export const PostInvoicesCreatePreviewRequestShippingSchema: TypedSchema<PostInvoicesCreatePreviewRequestShipping> = typed<PostInvoicesCreatePreviewRequestShipping>(union(PostCustomersRequestShippingObjectSchema, string()));