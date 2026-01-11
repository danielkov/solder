import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Person } from './Person';
import { PersonSchema } from './Person';
/**
 * PersonList
 *
 * 
 */
export interface GetAccountsAccountPeopleResponse {
  data: Array<Person>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const GetAccountsAccountPeopleResponseSchema: TypedSchema<GetAccountsAccountPeopleResponse> = typed<GetAccountsAccountPeopleResponse>(object({
  data: array(PersonSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));