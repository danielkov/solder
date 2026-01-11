import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * registration_date_specs
 */
export interface PostAccountsRequestRegistrationDateObject {
  day: number;
  month: number;
  year: number;
}

export const PostAccountsRequestRegistrationDateObjectSchema: TypedSchema<PostAccountsRequestRegistrationDateObject> = typed<PostAccountsRequestRegistrationDateObject>(object({
  day: number(),
  month: number(),
  year: number(),
}));