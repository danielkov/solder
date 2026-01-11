import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { AccountBacsDebitPaymentsSettings } from './AccountBacsDebitPaymentsSettings';
import { AccountBacsDebitPaymentsSettingsSchema } from './AccountBacsDebitPaymentsSettings';
import type { AccountBrandingSettings } from './AccountBrandingSettings';
import { AccountBrandingSettingsSchema } from './AccountBrandingSettings';
import type { AccountCardIssuingSettings } from './AccountCardIssuingSettings';
import { AccountCardIssuingSettingsSchema } from './AccountCardIssuingSettings';
import type { AccountCardPaymentsSettings } from './AccountCardPaymentsSettings';
import { AccountCardPaymentsSettingsSchema } from './AccountCardPaymentsSettings';
import type { AccountDashboardSettings } from './AccountDashboardSettings';
import { AccountDashboardSettingsSchema } from './AccountDashboardSettings';
import type { AccountInvoicesSettings } from './AccountInvoicesSettings';
import { AccountInvoicesSettingsSchema } from './AccountInvoicesSettings';
import type { AccountPaymentsSettings } from './AccountPaymentsSettings';
import { AccountPaymentsSettingsSchema } from './AccountPaymentsSettings';
import type { AccountPayoutSettings } from './AccountPayoutSettings';
import { AccountPayoutSettingsSchema } from './AccountPayoutSettings';
import type { AccountSepaDebitPaymentsSettings } from './AccountSepaDebitPaymentsSettings';
import { AccountSepaDebitPaymentsSettingsSchema } from './AccountSepaDebitPaymentsSettings';
import type { AccountTreasurySettings } from './AccountTreasurySettings';
import { AccountTreasurySettingsSchema } from './AccountTreasurySettings';
/**
 * AccountSettings
 *
 * 
 */
export interface AccountSettings {
  /**
   * AccountBacsDebitPaymentsSettings
   *
   * 
   */
  bacsDebitPayments?: AccountBacsDebitPaymentsSettings;
  /**
   * AccountBrandingSettings
   *
   * 
   */
  branding: AccountBrandingSettings;
  /**
   * AccountCardIssuingSettings
   *
   * 
   */
  cardIssuing?: AccountCardIssuingSettings;
  /**
   * AccountCardPaymentsSettings
   *
   * 
   */
  cardPayments: AccountCardPaymentsSettings;
  /**
   * AccountDashboardSettings
   *
   * 
   */
  dashboard: AccountDashboardSettings;
  /**
   * AccountInvoicesSettings
   *
   * 
   */
  invoices?: AccountInvoicesSettings;
  /**
   * AccountPaymentsSettings
   *
   * 
   */
  payments: AccountPaymentsSettings;
  /**
   * AccountPayoutSettings
   *
   * 
   */
  payouts?: AccountPayoutSettings;
  /**
   * AccountSepaDebitPaymentsSettings
   *
   * 
   */
  sepaDebitPayments?: AccountSepaDebitPaymentsSettings;
  /**
   * AccountTreasurySettings
   *
   * 
   */
  treasury?: AccountTreasurySettings;
}

export const AccountSettingsSchema: TypedSchema<AccountSettings> = typed<AccountSettings>(object({
  get bacsDebitPayments() { return optional(AccountBacsDebitPaymentsSettingsSchema) },
  branding: AccountBrandingSettingsSchema,
  get cardIssuing() { return optional(AccountCardIssuingSettingsSchema) },
  cardPayments: AccountCardPaymentsSettingsSchema,
  dashboard: AccountDashboardSettingsSchema,
  get invoices() { return optional(AccountInvoicesSettingsSchema) },
  payments: AccountPaymentsSettingsSchema,
  get payouts() { return optional(AccountPayoutSettingsSchema) },
  get sepaDebitPayments() { return optional(AccountSepaDebitPaymentsSettingsSchema) },
  get treasury() { return optional(AccountTreasurySettingsSchema) },
}));