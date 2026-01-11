import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPercentOwnership } from './PostAccountsRequestPercentOwnership';
import { PostAccountsRequestPercentOwnershipSchema } from './PostAccountsRequestPercentOwnership';
/**
 * relationship_specs
 */
export interface PostTokensRequestRelationship {
  authorizer?: boolean;
  director?: boolean;
  executive?: boolean;
  legalGuardian?: boolean;
  owner?: boolean;
  percentOwnership?: PostAccountsRequestPercentOwnership;
  representative?: boolean;
  title?: string;
}

export const PostTokensRequestRelationshipSchema: TypedSchema<PostTokensRequestRelationship> = typed<PostTokensRequestRelationship>(object({
  authorizer: optional(boolean()),
  director: optional(boolean()),
  executive: optional(boolean()),
  legalGuardian: optional(boolean()),
  owner: optional(boolean()),
  get percentOwnership() { return optional(PostAccountsRequestPercentOwnershipSchema) },
  representative: optional(boolean()),
  title: optional(string()),
}));