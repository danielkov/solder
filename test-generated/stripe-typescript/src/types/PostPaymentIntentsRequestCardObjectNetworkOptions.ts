import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestCardObjectCartesBancaires } from './PostPaymentIntentsRequestCardObjectCartesBancaires';
import { PostPaymentIntentsRequestCardObjectCartesBancairesSchema } from './PostPaymentIntentsRequestCardObjectCartesBancaires';
/**
 * network_options_param
 */
export interface PostPaymentIntentsRequestCardObjectNetworkOptions {
  /**
   * cartes_bancaires_network_options_param
   */
  cartesBancaires?: PostPaymentIntentsRequestCardObjectCartesBancaires;
}

export const PostPaymentIntentsRequestCardObjectNetworkOptionsSchema: TypedSchema<PostPaymentIntentsRequestCardObjectNetworkOptions> = typed<PostPaymentIntentsRequestCardObjectNetworkOptions>(object({
  get cartesBancaires() { return optional(PostPaymentIntentsRequestCardObjectCartesBancairesSchema) },
}));