import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestInstallments } from './PostCheckoutSessionsRequestInstallments';
import { PostCheckoutSessionsRequestInstallmentsSchema } from './PostCheckoutSessionsRequestInstallments';
import type { PostCheckoutSessionsRequestRestrictions } from './PostCheckoutSessionsRequestRestrictions';
import { PostCheckoutSessionsRequestRestrictionsSchema } from './PostCheckoutSessionsRequestRestrictions';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestCard {
  captureMethod?: string;
  /**
   * installments_param
   */
  installments?: PostCheckoutSessionsRequestInstallments;
  requestExtendedAuthorization?: string;
  requestIncrementalAuthorization?: string;
  requestMulticapture?: string;
  requestOvercapture?: string;
  requestThreeDSecure?: string;
  /**
   * restrictions_param
   */
  restrictions?: PostCheckoutSessionsRequestRestrictions;
  setupFutureUsage?: string;
  statementDescriptorSuffixKana?: string;
  statementDescriptorSuffixKanji?: string;
}

export const PostCheckoutSessionsRequestCardSchema: TypedSchema<PostCheckoutSessionsRequestCard> = typed<PostCheckoutSessionsRequestCard>(object({
  captureMethod: optional(string()),
  get installments() { return optional(PostCheckoutSessionsRequestInstallmentsSchema) },
  requestExtendedAuthorization: optional(string()),
  requestIncrementalAuthorization: optional(string()),
  requestMulticapture: optional(string()),
  requestOvercapture: optional(string()),
  requestThreeDSecure: optional(string()),
  get restrictions() { return optional(PostCheckoutSessionsRequestRestrictionsSchema) },
  setupFutureUsage: optional(string()),
  statementDescriptorSuffixKana: optional(string()),
  statementDescriptorSuffixKanji: optional(string()),
}));