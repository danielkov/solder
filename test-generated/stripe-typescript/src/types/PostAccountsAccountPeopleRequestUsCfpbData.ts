import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountPeopleRequestEthnicityDetails } from './PostAccountsAccountPeopleRequestEthnicityDetails';
import { PostAccountsAccountPeopleRequestEthnicityDetailsSchema } from './PostAccountsAccountPeopleRequestEthnicityDetails';
import type { PostAccountsAccountPeopleRequestRaceDetails } from './PostAccountsAccountPeopleRequestRaceDetails';
import { PostAccountsAccountPeopleRequestRaceDetailsSchema } from './PostAccountsAccountPeopleRequestRaceDetails';
/**
 * us_cfpb_data_specs
 *
 * Demographic data related to the person.
 */
export interface PostAccountsAccountPeopleRequestUsCfpbData {
  /**
   * us_cfpb_ethnicity_details_specs
   */
  ethnicityDetails?: PostAccountsAccountPeopleRequestEthnicityDetails;
  /**
   * us_cfpb_race_details_specs
   */
  raceDetails?: PostAccountsAccountPeopleRequestRaceDetails;
  selfIdentifiedGender?: string;
}

export const PostAccountsAccountPeopleRequestUsCfpbDataSchema: TypedSchema<PostAccountsAccountPeopleRequestUsCfpbData> = typed<PostAccountsAccountPeopleRequestUsCfpbData>(object({
  get ethnicityDetails() { return optional(PostAccountsAccountPeopleRequestEthnicityDetailsSchema) },
  get raceDetails() { return optional(PostAccountsAccountPeopleRequestRaceDetailsSchema) },
  selfIdentifiedGender: optional(string()),
}));