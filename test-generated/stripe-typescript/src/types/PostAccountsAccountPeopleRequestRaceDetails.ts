import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * us_cfpb_race_details_specs
 */
export interface PostAccountsAccountPeopleRequestRaceDetails {
  race?: Array<string>;
  raceOther?: string;
}

export const PostAccountsAccountPeopleRequestRaceDetailsSchema: TypedSchema<PostAccountsAccountPeopleRequestRaceDetails> = typed<PostAccountsAccountPeopleRequestRaceDetails>(object({
  race: optional(array(string())),
  raceOther: optional(string()),
}));