import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
 */
export type PostSubscriptionsSubscriptionExposedIdRequestDescription = string | string;

export const PostSubscriptionsSubscriptionExposedIdRequestDescriptionSchema: TypedSchema<PostSubscriptionsSubscriptionExposedIdRequestDescription> = typed<PostSubscriptionsSubscriptionExposedIdRequestDescription>(union(string(), string()));
