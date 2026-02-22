import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestRenderingOptionsObject } from './PostCheckoutSessionsRequestRenderingOptionsObject';
import { PostCheckoutSessionsRequestRenderingOptionsObjectSchema } from './PostCheckoutSessionsRequestRenderingOptionsObject';
export type PostCheckoutSessionsRequestRenderingOptions = PostCheckoutSessionsRequestRenderingOptionsObject | string;

export const PostCheckoutSessionsRequestRenderingOptionsSchema: TypedSchema<PostCheckoutSessionsRequestRenderingOptions> = typed<PostCheckoutSessionsRequestRenderingOptions>(union(PostCheckoutSessionsRequestRenderingOptionsObjectSchema, string()));
