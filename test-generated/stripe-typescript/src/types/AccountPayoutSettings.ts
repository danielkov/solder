import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TransferSchedule } from './TransferSchedule';
import { TransferScheduleSchema } from './TransferSchedule';
/**
 * AccountPayoutSettings
 *
 * 
 */
export interface AccountPayoutSettings {
  /**
   * A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. See [Understanding Connect account balances](/connect/account-balances) for details. The default value is `false` when [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, otherwise `true`.
   */
  debitNegativeBalances: boolean;
  /**
   * TransferSchedule
   *
   * 
   */
  schedule: TransferSchedule;
  /**
   * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
   */
  statementDescriptor?: string;
}

export const AccountPayoutSettingsSchema: TypedSchema<AccountPayoutSettings> = typed<AccountPayoutSettings>(object({
  debitNegativeBalances: boolean(),
  schedule: TransferScheduleSchema,
  statementDescriptor: optional(string()),
}));