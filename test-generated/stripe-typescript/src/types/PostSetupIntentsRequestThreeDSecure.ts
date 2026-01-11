import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestCardObjectNetworkOptions } from './PostPaymentIntentsRequestCardObjectNetworkOptions';
import { PostPaymentIntentsRequestCardObjectNetworkOptionsSchema } from './PostPaymentIntentsRequestCardObjectNetworkOptions';
/**
 * setup_intent_payment_method_options_param
 */
export interface PostSetupIntentsRequestThreeDSecure {
  aresTransStatus?: string;
  cryptogram?: string;
  electronicCommerceIndicator?: string;
  /**
   * network_options_param
   */
  networkOptions?: PostPaymentIntentsRequestCardObjectNetworkOptions;
  requestorChallengeIndicator?: string;
  transactionId?: string;
  version?: string;
}

export const PostSetupIntentsRequestThreeDSecureSchema: TypedSchema<PostSetupIntentsRequestThreeDSecure> = typed<PostSetupIntentsRequestThreeDSecure>(object({
  aresTransStatus: optional(string()),
  cryptogram: optional(string()),
  electronicCommerceIndicator: optional(string()),
  get networkOptions() { return optional(PostPaymentIntentsRequestCardObjectNetworkOptionsSchema) },
  requestorChallengeIndicator: optional(string()),
  transactionId: optional(string()),
  version: optional(string()),
}));