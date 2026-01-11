import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestSubscriptionsObject } from './PostCheckoutSessionsRequestSubscriptionsObject';
import { PostCheckoutSessionsRequestSubscriptionsObjectSchema } from './PostCheckoutSessionsRequestSubscriptionsObject';
export type PostCheckoutSessionsRequestSubscriptions = Array<PostCheckoutSessionsRequestSubscriptionsObject> | string;

export const PostCheckoutSessionsRequestSubscriptionsSchema: TypedSchema<PostCheckoutSessionsRequestSubscriptions> = typed<PostCheckoutSessionsRequestSubscriptions>(union(array(PostCheckoutSessionsRequestSubscriptionsObjectSchema), string()));