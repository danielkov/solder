import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PersonEthnicityDetails } from './PersonEthnicityDetails';
import { PersonEthnicityDetailsSchema } from './PersonEthnicityDetails';
import type { PersonRaceDetails } from './PersonRaceDetails';
import { PersonRaceDetailsSchema } from './PersonRaceDetails';
/**
 * PersonUSCfpbData
 *
 * 
 */
export interface PersonUsCfpbData {
  /**
   * The persons ethnicity details
   */
  ethnicityDetails?: PersonEthnicityDetails;
  /**
   * The persons race details
   */
  raceDetails?: PersonRaceDetails;
  /**
   * The persons self-identified gender
   */
  selfIdentifiedGender?: string;
}

export const PersonUsCfpbDataSchema: TypedSchema<PersonUsCfpbData> = typed<PersonUsCfpbData>(object({
  get ethnicityDetails() { return optional(PersonEthnicityDetailsSchema) },
  get raceDetails() { return optional(PersonRaceDetailsSchema) },
  selfIdentifiedGender: optional(string()),
}));