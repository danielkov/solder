import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestShippingOptionsItem } from './PostCheckoutSessionsRequestShippingOptionsItem';
import { PostCheckoutSessionsRequestShippingOptionsItemSchema } from './PostCheckoutSessionsRequestShippingOptionsItem';
/**
 * The shipping rate options to apply to this Session. Up to a maximum of 5.
 */
export type PostCheckoutSessionsSessionRequestShippingOptions = Array<PostCheckoutSessionsRequestShippingOptionsItem> | string;

export const PostCheckoutSessionsSessionRequestShippingOptionsSchema: TypedSchema<PostCheckoutSessionsSessionRequestShippingOptions> = typed<PostCheckoutSessionsSessionRequestShippingOptions>(union(array(PostCheckoutSessionsRequestShippingOptionsItemSchema), string()));
