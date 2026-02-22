import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { SubscriptionSchedule } from './SubscriptionSchedule';
import { SubscriptionScheduleSchema } from './SubscriptionSchedule';
/**
 * The schedule attached to the subscription
 */
export type ScheduleOrRef = string | SubscriptionSchedule;

export const ScheduleOrRefSchema: TypedSchema<ScheduleOrRef> = typed<ScheduleOrRef>(union(string(), SubscriptionScheduleSchema));
