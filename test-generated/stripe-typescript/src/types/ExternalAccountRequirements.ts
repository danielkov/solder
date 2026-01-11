import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountRequirementsError } from './AccountRequirementsError';
import { AccountRequirementsErrorSchema } from './AccountRequirementsError';
/**
 * ExternalAccountRequirements
 *
 * 
 */
export interface ExternalAccountRequirements {
  /**
   * Fields that need to be collected to keep the external account enabled. If not collected by `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
   */
  currentlyDue?: Array<string>;
  /**
   * Fields that are `currently_due` and need to be collected again because validation or verification failed.
   */
  errors?: Array<AccountRequirementsError>;
  /**
   * Fields that weren't collected by `current_deadline`. These fields need to be collected to enable the external account.
   */
  pastDue?: Array<string>;
  /**
   * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. Fields might appear in `eventually_due`, `currently_due`, or `past_due` and in `pending_verification` if verification fails but another verification is still pending.
   */
  pendingVerification?: Array<string>;
}

export const ExternalAccountRequirementsSchema: TypedSchema<ExternalAccountRequirements> = typed<ExternalAccountRequirements>(object({
  currentlyDue: optional(array(string())),
  get errors() { return optional(array(AccountRequirementsErrorSchema)) },
  pastDue: optional(array(string())),
  pendingVerification: optional(array(string())),
}));