import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostSubscriptionSchedulesRequestStartDate = number | string;

export const PostSubscriptionSchedulesRequestStartDateSchema: TypedSchema<PostSubscriptionSchedulesRequestStartDate> = typed<PostSubscriptionSchedulesRequestStartDate>(union(number(), string()));