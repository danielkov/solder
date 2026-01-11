import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * networks_params
 */
export interface PostPaymentMethodsRequestCardObjectNetworks {
  preferred?: string;
}

export const PostPaymentMethodsRequestCardObjectNetworksSchema: TypedSchema<PostPaymentMethodsRequestCardObjectNetworks> = typed<PostPaymentMethodsRequestCardObjectNetworks>(object({
  preferred: optional(string()),
}));