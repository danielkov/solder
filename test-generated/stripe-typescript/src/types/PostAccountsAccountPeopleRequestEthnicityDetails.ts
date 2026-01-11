import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * us_cfpb_ethnicity_details_specs
 */
export interface PostAccountsAccountPeopleRequestEthnicityDetails {
  ethnicity?: Array<string>;
  ethnicityOther?: string;
}

export const PostAccountsAccountPeopleRequestEthnicityDetailsSchema: TypedSchema<PostAccountsAccountPeopleRequestEthnicityDetails> = typed<PostAccountsAccountPeopleRequestEthnicityDetails>(object({
  ethnicity: optional(array(string())),
  ethnicityOther: optional(string()),
}));