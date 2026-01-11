import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PersonAdditionalTosAcceptance } from './PersonAdditionalTosAcceptance';
import { PersonAdditionalTosAcceptanceSchema } from './PersonAdditionalTosAcceptance';
/**
 * PersonAdditionalTOSAcceptances
 *
 * 
 */
export interface PersonAdditionalTosAcceptances {
  /**
   * Details on the legal guardian's acceptance of the main Stripe service agreement.
   */
  account?: PersonAdditionalTosAcceptance;
}

export const PersonAdditionalTosAcceptancesSchema: TypedSchema<PersonAdditionalTosAcceptances> = typed<PersonAdditionalTosAcceptances>(object({
  get account() { return optional(PersonAdditionalTosAcceptanceSchema) },
}));