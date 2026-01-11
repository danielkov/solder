import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodsPaymentMethodRequestNetworks } from './PostPaymentMethodsPaymentMethodRequestNetworks';
import { PostPaymentMethodsPaymentMethodRequestNetworksSchema } from './PostPaymentMethodsPaymentMethodRequestNetworks';
/**
 * update_api_param
 *
 * If this is a `card` PaymentMethod, this hash contains the user's card details.
 */
export interface PostPaymentMethodsPaymentMethodRequestCard {
  expMonth?: number;
  expYear?: number;
  /**
   * networks_update_api_param
   */
  networks?: PostPaymentMethodsPaymentMethodRequestNetworks;
}

export const PostPaymentMethodsPaymentMethodRequestCardSchema: TypedSchema<PostPaymentMethodsPaymentMethodRequestCard> = typed<PostPaymentMethodsPaymentMethodRequestCard>(object({
  expMonth: optional(number()),
  expYear: optional(number()),
  get networks() { return optional(PostPaymentMethodsPaymentMethodRequestNetworksSchema) },
}));