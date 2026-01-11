import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * all_people_relationship_specs
 */
export interface GetAccountsAccountPeopleObject {
  authorizer?: boolean;
  director?: boolean;
  executive?: boolean;
  legalGuardian?: boolean;
  owner?: boolean;
  representative?: boolean;
}

export const GetAccountsAccountPeopleObjectSchema: TypedSchema<GetAccountsAccountPeopleObject> = typed<GetAccountsAccountPeopleObject>(object({
  authorizer: optional(boolean()),
  director: optional(boolean()),
  executive: optional(boolean()),
  legalGuardian: optional(boolean()),
  owner: optional(boolean()),
  representative: optional(boolean()),
}));