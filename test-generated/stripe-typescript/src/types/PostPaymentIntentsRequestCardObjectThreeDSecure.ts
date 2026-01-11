import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestCardObjectNetworkOptions } from './PostPaymentIntentsRequestCardObjectNetworkOptions';
import { PostPaymentIntentsRequestCardObjectNetworkOptionsSchema } from './PostPaymentIntentsRequestCardObjectNetworkOptions';
/**
 * payment_method_options_param
 */
export interface PostPaymentIntentsRequestCardObjectThreeDSecure {
  aresTransStatus?: string;
  cryptogram: string;
  electronicCommerceIndicator?: string;
  exemptionIndicator?: string;
  /**
   * network_options_param
   */
  networkOptions?: PostPaymentIntentsRequestCardObjectNetworkOptions;
  requestorChallengeIndicator?: string;
  transactionId: string;
  version: string;
}

export const PostPaymentIntentsRequestCardObjectThreeDSecureSchema: TypedSchema<PostPaymentIntentsRequestCardObjectThreeDSecure> = typed<PostPaymentIntentsRequestCardObjectThreeDSecure>(object({
  aresTransStatus: optional(string()),
  cryptogram: string(),
  electronicCommerceIndicator: optional(string()),
  exemptionIndicator: optional(string()),
  get networkOptions() { return optional(PostPaymentIntentsRequestCardObjectNetworkOptionsSchema) },
  requestorChallengeIndicator: optional(string()),
  transactionId: string(),
  version: string(),
}));