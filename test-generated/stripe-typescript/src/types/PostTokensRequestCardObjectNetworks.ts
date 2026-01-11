import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * networks_param_specs
 */
export interface PostTokensRequestCardObjectNetworks {
  preferred?: string;
}

export const PostTokensRequestCardObjectNetworksSchema: TypedSchema<PostTokensRequestCardObjectNetworks> = typed<PostTokensRequestCardObjectNetworks>(object({
  preferred: optional(string()),
}));