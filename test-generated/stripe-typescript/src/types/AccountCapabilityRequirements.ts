import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountRequirementsAlternative } from './AccountRequirementsAlternative';
import { AccountRequirementsAlternativeSchema } from './AccountRequirementsAlternative';
import type { AccountRequirementsError } from './AccountRequirementsError';
import { AccountRequirementsErrorSchema } from './AccountRequirementsError';
/**
 * AccountCapabilityRequirements
 *
 * 
 */
export interface AccountCapabilityRequirements {
  /**
   * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
   */
  alternatives?: Array<AccountRequirementsAlternative>;
  /**
   * The date by which all required account information must be both submitted and verified. This includes fields listed in `currently_due` as well as those in `pending_verification`. If any required information is missing or unverified by this date, the account may be disabled. Note that `current_deadline` may change if additional `currently_due` requirements are requested.
   */
  currentDeadline?: number;
  /**
   * Fields that need to be collected to keep the capability enabled. If not collected by `current_deadline`, these fields appear in `past_due` as well, and the capability is disabled.
   */
  currentlyDue: Array<string>;
  /**
   * Description of why the capability is disabled. [Learn more about handling verification issues](https://stripe.com/docs/connect/handling-api-verification).
   */
  disabledReason?: string;
  /**
   * Fields that are `currently_due` and need to be collected again because validation or verification failed.
   */
  errors: Array<AccountRequirementsError>;
  /**
   * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well, and `current_deadline` becomes set.
   */
  eventuallyDue: Array<string>;
  /**
   * Fields that weren't collected by `current_deadline`. These fields need to be collected to enable the capability on the account.
   */
  pastDue: Array<string>;
  /**
   * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. Fields might appear in `eventually_due`, `currently_due`, or `past_due` and in `pending_verification` if verification fails but another verification is still pending.
   */
  pendingVerification: Array<string>;
}

export const AccountCapabilityRequirementsSchema: TypedSchema<AccountCapabilityRequirements> = typed<AccountCapabilityRequirements>(object({
  get alternatives() { return optional(array(AccountRequirementsAlternativeSchema)) },
  currentDeadline: optional(number()),
  currentlyDue: array(string()),
  disabledReason: optional(string()),
  errors: array(AccountRequirementsErrorSchema),
  eventuallyDue: array(string()),
  pastDue: array(string()),
  pendingVerification: array(string()),
}));