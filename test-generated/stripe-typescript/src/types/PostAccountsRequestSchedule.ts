import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestDelayDays } from './PostAccountsRequestDelayDays';
import { PostAccountsRequestDelayDaysSchema } from './PostAccountsRequestDelayDays';
/**
 * transfer_schedule_specs
 */
export interface PostAccountsRequestSchedule {
  delayDays?: PostAccountsRequestDelayDays;
  interval?: string;
  monthlyAnchor?: number;
  monthlyPayoutDays?: Array<number>;
  weeklyAnchor?: string;
  weeklyPayoutDays?: Array<string>;
}

export const PostAccountsRequestScheduleSchema: TypedSchema<PostAccountsRequestSchedule> = typed<PostAccountsRequestSchedule>(object({
  get delayDays() { return optional(PostAccountsRequestDelayDaysSchema) },
  interval: optional(string()),
  monthlyAnchor: optional(number()),
  monthlyPayoutDays: optional(array(number())),
  weeklyAnchor: optional(string()),
  weeklyPayoutDays: optional(array(string())),
}));