import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSchedule } from './PostAccountsRequestSchedule';
import { PostAccountsRequestScheduleSchema } from './PostAccountsRequestSchedule';
/**
 * payout_settings_specs
 */
export interface PostAccountsRequestPayouts {
  debitNegativeBalances?: boolean;
  /**
   * transfer_schedule_specs
   */
  schedule?: PostAccountsRequestSchedule;
  statementDescriptor?: string;
}

export const PostAccountsRequestPayoutsSchema: TypedSchema<PostAccountsRequestPayouts> = typed<PostAccountsRequestPayouts>(object({
  debitNegativeBalances: optional(boolean()),
  get schedule() { return optional(PostAccountsRequestScheduleSchema) },
  statementDescriptor: optional(string()),
}));