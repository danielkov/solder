import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPercentOwnership } from './PostAccountsRequestPercentOwnership';
import { PostAccountsRequestPercentOwnershipSchema } from './PostAccountsRequestPercentOwnership';
/**
 * individual_relationship_specs
 */
export interface PostAccountsRequestRelationship {
  director?: boolean;
  executive?: boolean;
  owner?: boolean;
  percentOwnership?: PostAccountsRequestPercentOwnership;
  title?: string;
}

export const PostAccountsRequestRelationshipSchema: TypedSchema<PostAccountsRequestRelationship> = typed<PostAccountsRequestRelationship>(object({
  director: optional(boolean()),
  executive: optional(boolean()),
  owner: optional(boolean()),
  get percentOwnership() { return optional(PostAccountsRequestPercentOwnershipSchema) },
  title: optional(string()),
}));