import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { AccountTermsOfService } from './AccountTermsOfService';
import { AccountTermsOfServiceSchema } from './AccountTermsOfService';
/**
 * AccountTreasurySettings
 *
 * 
 */
export interface AccountTreasurySettings {
  /**
   * AccountTermsOfService
   *
   * 
   */
  tosAcceptance?: AccountTermsOfService;
}

export const AccountTreasurySettingsSchema: TypedSchema<AccountTreasurySettings> = typed<AccountTreasurySettings>(object({
  get tosAcceptance() { return optional(AccountTermsOfServiceSchema) },
}));