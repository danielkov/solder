import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TransferSchedule
 *
 * 
 */
export interface TransferSchedule {
  /**
   * The number of days charges for the account will be held before being paid out.
   */
  delayDays: number;
  /**
   * How frequently funds will be paid out. One of `manual` (payouts only created via API call), `daily`, `weekly`, or `monthly`.
   */
  interval: string;
  /**
   * The day of the month funds will be paid out. Only shown if `interval` is monthly. Payouts scheduled between the 29th and 31st of the month are sent on the last day of shorter months.
   */
  monthlyAnchor?: number;
  /**
   * The days of the month funds will be paid out. Only shown if `interval` is monthly. Payouts scheduled between the 29th and 31st of the month are sent on the last day of shorter months.
   */
  monthlyPayoutDays?: Array<number>;
  /**
   * The day of the week funds will be paid out, of the style 'monday', 'tuesday', etc. Only shown if `interval` is weekly.
   */
  weeklyAnchor?: string;
  /**
   * The days of the week when available funds are paid out, specified as an array, for example, [`monday`, `tuesday`]. Only shown if `interval` is weekly.
   */
  weeklyPayoutDays?: Array<string>;
}

export const TransferScheduleSchema: TypedSchema<TransferSchedule> = typed<TransferSchedule>(object({
  delayDays: number(),
  interval: string(),
  monthlyAnchor: optional(number()),
  monthlyPayoutDays: optional(array(number())),
  weeklyAnchor: optional(string()),
  weeklyPayoutDays: optional(array(string())),
}));