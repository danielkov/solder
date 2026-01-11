import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { SubscriptionSchedule } from './SubscriptionSchedule';
import { SubscriptionScheduleSchema } from './SubscriptionSchedule';
export type SubscriptionScheduleOrRef = string | SubscriptionSchedule;

export const SubscriptionScheduleOrRefSchema: TypedSchema<SubscriptionScheduleOrRef> = typed<SubscriptionScheduleOrRef>(union(string(), SubscriptionScheduleSchema));