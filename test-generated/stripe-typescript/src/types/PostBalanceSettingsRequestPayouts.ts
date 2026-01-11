import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBalanceSettingsRequestMinimumBalanceByCurrency } from './PostBalanceSettingsRequestMinimumBalanceByCurrency';
import { PostBalanceSettingsRequestMinimumBalanceByCurrencySchema } from './PostBalanceSettingsRequestMinimumBalanceByCurrency';
import type { PostBalanceSettingsRequestSchedule } from './PostBalanceSettingsRequestSchedule';
import { PostBalanceSettingsRequestScheduleSchema } from './PostBalanceSettingsRequestSchedule';
/**
 * payouts
 */
export interface PostBalanceSettingsRequestPayouts {
  minimumBalanceByCurrency?: PostBalanceSettingsRequestMinimumBalanceByCurrency;
  /**
   * payout_schedule
   */
  schedule?: PostBalanceSettingsRequestSchedule;
  statementDescriptor?: string;
}

export const PostBalanceSettingsRequestPayoutsSchema: TypedSchema<PostBalanceSettingsRequestPayouts> = typed<PostBalanceSettingsRequestPayouts>(object({
  get minimumBalanceByCurrency() { return optional(PostBalanceSettingsRequestMinimumBalanceByCurrencySchema) },
  get schedule() { return optional(PostBalanceSettingsRequestScheduleSchema) },
  statementDescriptor: optional(string()),
}));