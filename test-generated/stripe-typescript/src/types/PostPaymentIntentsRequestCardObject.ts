import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostInvoicesRequestCardObjectInstallments } from './PostInvoicesRequestCardObjectInstallments';
import { PostInvoicesRequestCardObjectInstallmentsSchema } from './PostInvoicesRequestCardObjectInstallments';
import type { PostPaymentIntentsRequestCardObjectMandateOptions } from './PostPaymentIntentsRequestCardObjectMandateOptions';
import { PostPaymentIntentsRequestCardObjectMandateOptionsSchema } from './PostPaymentIntentsRequestCardObjectMandateOptions';
import type { PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana } from './PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana';
import { PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanaSchema } from './PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana';
import type { PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanji } from './PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanji';
import { PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanjiSchema } from './PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanji';
import type { PostPaymentIntentsRequestCardObjectThreeDSecure } from './PostPaymentIntentsRequestCardObjectThreeDSecure';
import { PostPaymentIntentsRequestCardObjectThreeDSecureSchema } from './PostPaymentIntentsRequestCardObjectThreeDSecure';
/**
 * payment_intent_param
 */
export interface PostPaymentIntentsRequestCardObject {
  captureMethod?: string;
  cvcToken?: string;
  /**
   * installments_param
   */
  installments?: PostInvoicesRequestCardObjectInstallments;
  /**
   * mandate_options_param
   */
  mandateOptions?: PostPaymentIntentsRequestCardObjectMandateOptions;
  network?: string;
  requestExtendedAuthorization?: string;
  requestIncrementalAuthorization?: string;
  requestMulticapture?: string;
  requestOvercapture?: string;
  requestThreeDSecure?: string;
  requireCvcRecollection?: boolean;
  setupFutureUsage?: string;
  statementDescriptorSuffixKana?: PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana;
  statementDescriptorSuffixKanji?: PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanji;
  /**
   * payment_method_options_param
   */
  threeDSecure?: PostPaymentIntentsRequestCardObjectThreeDSecure;
}

export const PostPaymentIntentsRequestCardObjectSchema: TypedSchema<PostPaymentIntentsRequestCardObject> = typed<PostPaymentIntentsRequestCardObject>(object({
  captureMethod: optional(string()),
  cvcToken: optional(string()),
  get installments() { return optional(PostInvoicesRequestCardObjectInstallmentsSchema) },
  get mandateOptions() { return optional(PostPaymentIntentsRequestCardObjectMandateOptionsSchema) },
  network: optional(string()),
  requestExtendedAuthorization: optional(string()),
  requestIncrementalAuthorization: optional(string()),
  requestMulticapture: optional(string()),
  requestOvercapture: optional(string()),
  requestThreeDSecure: optional(string()),
  requireCvcRecollection: optional(boolean()),
  setupFutureUsage: optional(string()),
  get statementDescriptorSuffixKana() { return optional(PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanaSchema) },
  get statementDescriptorSuffixKanji() { return optional(PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanjiSchema) },
  get threeDSecure() { return optional(PostPaymentIntentsRequestCardObjectThreeDSecureSchema) },
}));