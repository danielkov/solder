import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * When the subscription schedule starts. We recommend using `now` so that it starts the subscription immediately. You can also use a Unix timestamp to backdate the subscription so that it starts on a past date, or set a future date for the subscription to start on.
 */
export type PostSubscriptionSchedulesRequestStartDate = number | string;

export const PostSubscriptionSchedulesRequestStartDateSchema: TypedSchema<PostSubscriptionSchedulesRequestStartDate> = typed<PostSubscriptionSchedulesRequestStartDate>(union(number(), string()));
