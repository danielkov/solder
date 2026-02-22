import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { SubscriptionSchedule } from './SubscriptionSchedule';
import { SubscriptionScheduleSchema } from './SubscriptionSchedule';
/**
 * The subscription schedule that was created or updated from this quote.
 */
export type SubscriptionScheduleOrRef = string | SubscriptionSchedule;

export const SubscriptionScheduleOrRefSchema: TypedSchema<SubscriptionScheduleOrRef> = typed<SubscriptionScheduleOrRef>(union(string(), SubscriptionScheduleSchema));
