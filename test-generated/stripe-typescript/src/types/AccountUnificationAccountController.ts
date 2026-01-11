import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountUnificationAccountControllerFees } from './AccountUnificationAccountControllerFees';
import { AccountUnificationAccountControllerFeesSchema } from './AccountUnificationAccountControllerFees';
import type { AccountUnificationAccountControllerLosses } from './AccountUnificationAccountControllerLosses';
import { AccountUnificationAccountControllerLossesSchema } from './AccountUnificationAccountControllerLosses';
import type { AccountUnificationAccountControllerStripeDashboard } from './AccountUnificationAccountControllerStripeDashboard';
import { AccountUnificationAccountControllerStripeDashboardSchema } from './AccountUnificationAccountControllerStripeDashboard';
/**
 * AccountUnificationAccountController
 *
 * 
 */
export interface AccountUnificationAccountController {
  /**
   * AccountUnificationAccountControllerFees
   *
   * 
   */
  fees?: AccountUnificationAccountControllerFees;
  /**
   * `true` if the Connect application retrieving the resource controls the account and can therefore exercise [platform controls](https://stripe.com/docs/connect/platform-controls-for-standard-accounts). Otherwise, this field is null.
   */
  isController?: boolean;
  /**
   * AccountUnificationAccountControllerLosses
   *
   * 
   */
  losses?: AccountUnificationAccountControllerLosses;
  /**
   * A value indicating responsibility for collecting requirements on this account. Only returned when the Connect application retrieving the resource controls the account.
   */
  requirementCollection?: string;
  /**
   * AccountUnificationAccountControllerStripeDashboard
   *
   * 
   */
  stripeDashboard?: AccountUnificationAccountControllerStripeDashboard;
  /**
   * The controller type. Can be `application`, if a Connect application controls the account, or `account`, if the account controls itself.
   */
  type: string;
}

export const AccountUnificationAccountControllerSchema: TypedSchema<AccountUnificationAccountController> = typed<AccountUnificationAccountController>(object({
  get fees() { return optional(AccountUnificationAccountControllerFeesSchema) },
  isController: optional(boolean()),
  get losses() { return optional(AccountUnificationAccountControllerLossesSchema) },
  requirementCollection: optional(string()),
  get stripeDashboard() { return optional(AccountUnificationAccountControllerStripeDashboardSchema) },
  type: string(),
}));