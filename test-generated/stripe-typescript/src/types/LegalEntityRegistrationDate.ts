import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * LegalEntityRegistrationDate
 *
 * 
 */
export interface LegalEntityRegistrationDate {
  /**
   * The day of registration, between 1 and 31.
   */
  day?: number;
  /**
   * The month of registration, between 1 and 12.
   */
  month?: number;
  /**
   * The four-digit year of registration.
   */
  year?: number;
}

export const LegalEntityRegistrationDateSchema: TypedSchema<LegalEntityRegistrationDate> = typed<LegalEntityRegistrationDate>(object({
  day: optional(number()),
  month: optional(number()),
  year: optional(number()),
}));