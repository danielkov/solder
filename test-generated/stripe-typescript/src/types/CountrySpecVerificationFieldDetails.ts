import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';
/**
 * CountrySpecVerificationFieldDetails
 *
 * 
 */
export interface CountrySpecVerificationFieldDetails {
  /**
   * Additional fields which are only required for some users.
   */
  additional: Array<string>;
  /**
   * Fields which every account must eventually provide.
   */
  minimum: Array<string>;
}

export const CountrySpecVerificationFieldDetailsSchema: TypedSchema<CountrySpecVerificationFieldDetails> = typed<CountrySpecVerificationFieldDetails>(object({
  additional: array(string()),
  minimum: array(string()),
}));