import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * mandate_offline_acceptance_params
 */
export interface PostSourcesRequestOffline {
  contactEmail: string;
}

export const PostSourcesRequestOfflineSchema: TypedSchema<PostSourcesRequestOffline> = typed<PostSourcesRequestOffline>(object({
  contactEmail: string(),
}));