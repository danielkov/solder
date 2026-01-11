import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCustomersRequestRenderingOptionsObject } from './PostCustomersRequestRenderingOptionsObject';
import { PostCustomersRequestRenderingOptionsObjectSchema } from './PostCustomersRequestRenderingOptionsObject';
export type PostCustomersRequestRenderingOptions = PostCustomersRequestRenderingOptionsObject | string;

export const PostCustomersRequestRenderingOptionsSchema: TypedSchema<PostCustomersRequestRenderingOptions> = typed<PostCustomersRequestRenderingOptions>(union(PostCustomersRequestRenderingOptionsObjectSchema, string()));