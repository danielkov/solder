import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * date_of_birth_specs
 */
export interface PostAccountsRequestDobObject {
  day: number;
  month: number;
  year: number;
}

export const PostAccountsRequestDobObjectSchema: TypedSchema<PostAccountsRequestDobObject> = typed<PostAccountsRequestDobObject>(object({
  day: number(),
  month: number(),
  year: number(),
}));