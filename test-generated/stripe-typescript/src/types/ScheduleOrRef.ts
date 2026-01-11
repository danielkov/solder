import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { SubscriptionSchedule } from './SubscriptionSchedule';
import { SubscriptionScheduleSchema } from './SubscriptionSchedule';
export type ScheduleOrRef = string | SubscriptionSchedule;

export const ScheduleOrRefSchema: TypedSchema<ScheduleOrRef> = typed<ScheduleOrRef>(union(string(), SubscriptionScheduleSchema));