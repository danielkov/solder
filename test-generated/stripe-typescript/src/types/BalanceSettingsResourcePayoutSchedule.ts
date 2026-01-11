import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * BalanceSettingsResourcePayoutSchedule
 *
 * 
 */
export interface BalanceSettingsResourcePayoutSchedule {
  /**
   * How frequently funds will be paid out. One of `manual` (payouts only created via API call), `daily`, `weekly`, or `monthly`.
   */
  interval?: string;
  /**
   * The day of the month funds will be paid out. Only shown if `interval` is monthly. Payouts scheduled between the 29th and 31st of the month are sent on the last day of shorter months.
   */
  monthlyPayoutDays?: Array<number>;
  /**
   * The days of the week when available funds are paid out, specified as an array, for example, [`monday`, `tuesday`]. Only shown if `interval` is weekly.
   */
  weeklyPayoutDays?: Array<string>;
}

export const BalanceSettingsResourcePayoutScheduleSchema: TypedSchema<BalanceSettingsResourcePayoutSchedule> = typed<BalanceSettingsResourcePayoutSchedule>(object({
  interval: optional(string()),
  monthlyPayoutDays: optional(array(number())),
  weeklyPayoutDays: optional(array(string())),
}));