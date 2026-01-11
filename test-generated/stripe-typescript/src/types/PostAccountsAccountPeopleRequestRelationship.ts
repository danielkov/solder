import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPercentOwnership } from './PostAccountsRequestPercentOwnership';
import { PostAccountsRequestPercentOwnershipSchema } from './PostAccountsRequestPercentOwnership';
/**
 * relationship_specs
 *
 * The relationship that this person has with the account's legal entity.
 */
export interface PostAccountsAccountPeopleRequestRelationship {
  authorizer?: boolean;
  director?: boolean;
  executive?: boolean;
  legalGuardian?: boolean;
  owner?: boolean;
  percentOwnership?: PostAccountsRequestPercentOwnership;
  representative?: boolean;
  title?: string;
}

export const PostAccountsAccountPeopleRequestRelationshipSchema: TypedSchema<PostAccountsAccountPeopleRequestRelationship> = typed<PostAccountsAccountPeopleRequestRelationship>(object({
  authorizer: optional(boolean()),
  director: optional(boolean()),
  executive: optional(boolean()),
  legalGuardian: optional(boolean()),
  owner: optional(boolean()),
  get percentOwnership() { return optional(PostAccountsRequestPercentOwnershipSchema) },
  representative: optional(boolean()),
  title: optional(string()),
}));