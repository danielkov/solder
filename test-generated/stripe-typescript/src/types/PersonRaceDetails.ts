import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PersonRaceDetails
 *
 * 
 */
export interface PersonRaceDetails {
  /**
   * The persons race.
   */
  race?: Array<string>;
  /**
   * Please specify your race, when other is selected.
   */
  raceOther?: string;
}

export const PersonRaceDetailsSchema: TypedSchema<PersonRaceDetails> = typed<PersonRaceDetails>(object({
  race: optional(array(string())),
  raceOther: optional(string()),
}));