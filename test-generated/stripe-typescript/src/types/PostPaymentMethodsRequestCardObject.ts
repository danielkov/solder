import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodsRequestCardObjectNetworks } from './PostPaymentMethodsRequestCardObjectNetworks';
import { PostPaymentMethodsRequestCardObjectNetworksSchema } from './PostPaymentMethodsRequestCardObjectNetworks';
/**
 * card_details_params
 */
export interface PostPaymentMethodsRequestCardObject {
  cvc?: string;
  expMonth: number;
  expYear: number;
  /**
   * networks_params
   */
  networks?: PostPaymentMethodsRequestCardObjectNetworks;
  number: string;
}

export const PostPaymentMethodsRequestCardObjectSchema: TypedSchema<PostPaymentMethodsRequestCardObject> = typed<PostPaymentMethodsRequestCardObject>(object({
  cvc: optional(string()),
  expMonth: number(),
  expYear: number(),
  get networks() { return optional(PostPaymentMethodsRequestCardObjectNetworksSchema) },
  number: string(),
}));