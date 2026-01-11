import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestShippingOptionsItem } from './PostCheckoutSessionsRequestShippingOptionsItem';
import { PostCheckoutSessionsRequestShippingOptionsItemSchema } from './PostCheckoutSessionsRequestShippingOptionsItem';
export type PostCheckoutSessionsSessionRequestShippingOptions = Array<PostCheckoutSessionsRequestShippingOptionsItem> | string;

export const PostCheckoutSessionsSessionRequestShippingOptionsSchema: TypedSchema<PostCheckoutSessionsSessionRequestShippingOptions> = typed<PostCheckoutSessionsSessionRequestShippingOptions>(union(array(PostCheckoutSessionsRequestShippingOptionsItemSchema), string()));