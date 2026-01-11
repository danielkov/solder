import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payout_schedule
 */
export interface PostBalanceSettingsRequestSchedule {
  interval?: string;
  monthlyPayoutDays?: Array<number>;
  weeklyPayoutDays?: Array<string>;
}

export const PostBalanceSettingsRequestScheduleSchema: TypedSchema<PostBalanceSettingsRequestSchedule> = typed<PostBalanceSettingsRequestSchedule>(object({
  interval: optional(string()),
  monthlyPayoutDays: optional(array(number())),
  weeklyPayoutDays: optional(array(string())),
}));