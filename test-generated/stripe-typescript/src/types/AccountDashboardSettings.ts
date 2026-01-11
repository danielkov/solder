import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountDashboardSettings
 *
 * 
 */
export interface AccountDashboardSettings {
  /**
   * The display name for this account. This is used on the Stripe Dashboard to differentiate between accounts.
   */
  displayName?: string;
  /**
   * The timezone used in the Stripe Dashboard for this account. A list of possible time zone values is maintained at the [IANA Time Zone Database](http://www.iana.org/time-zones).
   */
  timezone?: string;
}

export const AccountDashboardSettingsSchema: TypedSchema<AccountDashboardSettings> = typed<AccountDashboardSettings>(object({
  displayName: optional(string()),
  timezone: optional(string()),
}));