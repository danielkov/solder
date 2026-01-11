import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestAfterSubmitObject } from './PostCheckoutSessionsRequestAfterSubmitObject';
import { PostCheckoutSessionsRequestAfterSubmitObjectSchema } from './PostCheckoutSessionsRequestAfterSubmitObject';
export type PostCheckoutSessionsRequestAfterSubmit = PostCheckoutSessionsRequestAfterSubmitObject | string;

export const PostCheckoutSessionsRequestAfterSubmitSchema: TypedSchema<PostCheckoutSessionsRequestAfterSubmit> = typed<PostCheckoutSessionsRequestAfterSubmit>(union(PostCheckoutSessionsRequestAfterSubmitObjectSchema, string()));