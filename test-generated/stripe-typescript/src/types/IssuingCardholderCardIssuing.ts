import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { IssuingCardholderUserTermsAcceptance } from './IssuingCardholderUserTermsAcceptance';
import { IssuingCardholderUserTermsAcceptanceSchema } from './IssuingCardholderUserTermsAcceptance';
/**
 * IssuingCardholderCardIssuing
 *
 * 
 */
export interface IssuingCardholderCardIssuing {
  /**
   * Information about cardholder acceptance of Celtic [Authorized User Terms](https://stripe.com/docs/issuing/cards#accept-authorized-user-terms). Required for cards backed by a Celtic program.
   */
  userTermsAcceptance?: IssuingCardholderUserTermsAcceptance;
}

export const IssuingCardholderCardIssuingSchema: TypedSchema<IssuingCardholderCardIssuing> = typed<IssuingCardholderCardIssuing>(object({
  get userTermsAcceptance() { return optional(IssuingCardholderUserTermsAcceptanceSchema) },
}));