import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPlansRequestProductObject } from './PostPlansRequestProductObject';
import { PostPlansRequestProductObjectSchema } from './PostPlansRequestProductObject';
export type PostPlansRequestProduct = PostPlansRequestProductObject | string;

export const PostPlansRequestProductSchema: TypedSchema<PostPlansRequestProduct> = typed<PostPlansRequestProduct>(union(PostPlansRequestProductObjectSchema, string()));