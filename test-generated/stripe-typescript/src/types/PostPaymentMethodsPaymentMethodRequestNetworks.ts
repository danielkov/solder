import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * networks_update_api_param
 */
export interface PostPaymentMethodsPaymentMethodRequestNetworks {
  preferred?: string;
}

export const PostPaymentMethodsPaymentMethodRequestNetworksSchema: TypedSchema<PostPaymentMethodsPaymentMethodRequestNetworks> = typed<PostPaymentMethodsPaymentMethodRequestNetworks>(object({
  preferred: optional(string()),
}));