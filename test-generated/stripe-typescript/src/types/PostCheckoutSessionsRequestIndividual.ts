import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * name_collection_individual_params
 */
export interface PostCheckoutSessionsRequestIndividual {
  enabled: boolean;
  optional?: boolean;
}

export const PostCheckoutSessionsRequestIndividualSchema: TypedSchema<PostCheckoutSessionsRequestIndividual> = typed<PostCheckoutSessionsRequestIndividual>(object({
  enabled: boolean(),
  optional: optional(boolean()),
}));