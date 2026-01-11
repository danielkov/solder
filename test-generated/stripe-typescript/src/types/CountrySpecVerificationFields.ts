import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { CountrySpecVerificationFieldDetails } from './CountrySpecVerificationFieldDetails';
import { CountrySpecVerificationFieldDetailsSchema } from './CountrySpecVerificationFieldDetails';
/**
 * CountrySpecVerificationFields
 *
 * 
 */
export interface CountrySpecVerificationFields {
  /**
   * CountrySpecVerificationFieldDetails
   *
   * 
   */
  company: CountrySpecVerificationFieldDetails;
  /**
   * CountrySpecVerificationFieldDetails
   *
   * 
   */
  individual: CountrySpecVerificationFieldDetails;
}

export const CountrySpecVerificationFieldsSchema: TypedSchema<CountrySpecVerificationFields> = typed<CountrySpecVerificationFields>(object({
  company: CountrySpecVerificationFieldDetailsSchema,
  individual: CountrySpecVerificationFieldDetailsSchema,
}));