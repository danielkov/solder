import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostSubscriptionsSubscriptionExposedIdRequestDescription = string | string;

export const PostSubscriptionsSubscriptionExposedIdRequestDescriptionSchema: TypedSchema<PostSubscriptionsSubscriptionExposedIdRequestDescription> = typed<PostSubscriptionsSubscriptionExposedIdRequestDescription>(union(string(), string()));