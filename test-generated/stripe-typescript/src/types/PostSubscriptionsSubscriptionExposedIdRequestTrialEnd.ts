import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostSubscriptionsSubscriptionExposedIdRequestTrialEnd = string | number;

export const PostSubscriptionsSubscriptionExposedIdRequestTrialEndSchema: TypedSchema<PostSubscriptionsSubscriptionExposedIdRequestTrialEnd> = typed<PostSubscriptionsSubscriptionExposedIdRequestTrialEnd>(union(string(), number()));