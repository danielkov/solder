import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountRequirementsAlternative } from './AccountRequirementsAlternative';
import { AccountRequirementsAlternativeSchema } from './AccountRequirementsAlternative';
import type { AccountRequirementsError } from './AccountRequirementsError';
import { AccountRequirementsErrorSchema } from './AccountRequirementsError';
/**
 * PersonRequirements
 *
 * 
 */
export interface PersonRequirements {
  /**
   * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
   */
  alternatives?: Array<AccountRequirementsAlternative>;
  /**
   * Fields that need to be collected to keep the person's account enabled. If not collected by the account's `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
   */
  currentlyDue: Array<string>;
  /**
   * Fields that are `currently_due` and need to be collected again because validation or verification failed.
   */
  errors: Array<AccountRequirementsError>;
  /**
   * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well, and the account's `current_deadline` becomes set.
   */
  eventuallyDue: Array<string>;
  /**
   * Fields that weren't collected by the account's `current_deadline`. These fields need to be collected to enable the person's account.
   */
  pastDue: Array<string>;
  /**
   * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. Fields might appear in `eventually_due`, `currently_due`, or `past_due` and in `pending_verification` if verification fails but another verification is still pending.
   */
  pendingVerification: Array<string>;
}

export const PersonRequirementsSchema: TypedSchema<PersonRequirements> = typed<PersonRequirements>(object({
  get alternatives() { return optional(array(AccountRequirementsAlternativeSchema)) },
  currentlyDue: array(string()),
  errors: array(AccountRequirementsErrorSchema),
  eventuallyDue: array(string()),
  pastDue: array(string()),
  pendingVerification: array(string()),
}));