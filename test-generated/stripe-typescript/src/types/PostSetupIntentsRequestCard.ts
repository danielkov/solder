import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostSetupIntentsRequestMandateOptions } from './DefaultPostSetupIntentsRequestMandateOptions';
import { DefaultPostSetupIntentsRequestMandateOptionsSchema } from './DefaultPostSetupIntentsRequestMandateOptions';
import type { PostSetupIntentsRequestThreeDSecure } from './PostSetupIntentsRequestThreeDSecure';
import { PostSetupIntentsRequestThreeDSecureSchema } from './PostSetupIntentsRequestThreeDSecure';
/**
 * setup_intent_param
 */
export interface PostSetupIntentsRequestCard {
  /**
   * setup_intent_mandate_options_param
   */
  mandateOptions?: DefaultPostSetupIntentsRequestMandateOptions;
  network?: string;
  requestThreeDSecure?: string;
  /**
   * setup_intent_payment_method_options_param
   */
  threeDSecure?: PostSetupIntentsRequestThreeDSecure;
}

export const PostSetupIntentsRequestCardSchema: TypedSchema<PostSetupIntentsRequestCard> = typed<PostSetupIntentsRequestCard>(object({
  get mandateOptions() { return optional(DefaultPostSetupIntentsRequestMandateOptionsSchema) },
  network: optional(string()),
  requestThreeDSecure: optional(string()),
  get threeDSecure() { return optional(PostSetupIntentsRequestThreeDSecureSchema) },
}));