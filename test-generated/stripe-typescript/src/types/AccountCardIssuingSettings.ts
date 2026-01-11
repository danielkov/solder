import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { CardIssuingAccountTermsOfService } from './CardIssuingAccountTermsOfService';
import { CardIssuingAccountTermsOfServiceSchema } from './CardIssuingAccountTermsOfService';
/**
 * AccountCardIssuingSettings
 *
 * 
 */
export interface AccountCardIssuingSettings {
  /**
   * CardIssuingAccountTermsOfService
   *
   * 
   */
  tosAcceptance?: CardIssuingAccountTermsOfService;
}

export const AccountCardIssuingSettingsSchema: TypedSchema<AccountCardIssuingSettings> = typed<AccountCardIssuingSettings>(object({
  get tosAcceptance() { return optional(CardIssuingAccountTermsOfServiceSchema) },
}));