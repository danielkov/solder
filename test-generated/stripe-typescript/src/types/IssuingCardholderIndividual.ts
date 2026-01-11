import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingCardholderCardIssuing } from './IssuingCardholderCardIssuing';
import { IssuingCardholderCardIssuingSchema } from './IssuingCardholderCardIssuing';
import type { IssuingCardholderIndividualDob } from './IssuingCardholderIndividualDob';
import { IssuingCardholderIndividualDobSchema } from './IssuingCardholderIndividualDob';
import type { IssuingCardholderVerification } from './IssuingCardholderVerification';
import { IssuingCardholderVerificationSchema } from './IssuingCardholderVerification';
/**
 * IssuingCardholderIndividual
 *
 * 
 */
export interface IssuingCardholderIndividual {
  /**
   * Information related to the card_issuing program for this cardholder.
   */
  cardIssuing?: IssuingCardholderCardIssuing;
  /**
   * The date of birth of this cardholder.
   */
  dob?: IssuingCardholderIndividualDob;
  /**
   * The first name of this cardholder. Required before activating Cards. This field cannot contain any numbers, special characters (except periods, commas, hyphens, spaces and apostrophes) or non-latin letters.
   */
  firstName?: string;
  /**
   * The last name of this cardholder. Required before activating Cards. This field cannot contain any numbers, special characters (except periods, commas, hyphens, spaces and apostrophes) or non-latin letters.
   */
  lastName?: string;
  /**
   * Government-issued ID document for this cardholder.
   */
  verification?: IssuingCardholderVerification;
}

export const IssuingCardholderIndividualSchema: TypedSchema<IssuingCardholderIndividual> = typed<IssuingCardholderIndividual>(object({
  get cardIssuing() { return optional(IssuingCardholderCardIssuingSchema) },
  get dob() { return optional(IssuingCardholderIndividualDobSchema) },
  firstName: optional(string()),
  lastName: optional(string()),
  get verification() { return optional(IssuingCardholderVerificationSchema) },
}));