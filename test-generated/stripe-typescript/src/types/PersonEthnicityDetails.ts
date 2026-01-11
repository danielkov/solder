import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PersonEthnicityDetails
 *
 * 
 */
export interface PersonEthnicityDetails {
  /**
   * The persons ethnicity
   */
  ethnicity?: Array<string>;
  /**
   * Please specify your origin, when other is selected.
   */
  ethnicityOther?: string;
}

export const PersonEthnicityDetailsSchema: TypedSchema<PersonEthnicityDetails> = typed<PersonEthnicityDetails>(object({
  ethnicity: optional(array(string())),
  ethnicityOther: optional(string()),
}));