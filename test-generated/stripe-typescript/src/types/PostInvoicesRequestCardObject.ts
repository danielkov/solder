import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostInvoicesRequestCardObjectInstallments } from './PostInvoicesRequestCardObjectInstallments';
import { PostInvoicesRequestCardObjectInstallmentsSchema } from './PostInvoicesRequestCardObjectInstallments';
/**
 * invoice_payment_method_options_param
 */
export interface PostInvoicesRequestCardObject {
  /**
   * installments_param
   */
  installments?: PostInvoicesRequestCardObjectInstallments;
  requestThreeDSecure?: string;
}

export const PostInvoicesRequestCardObjectSchema: TypedSchema<PostInvoicesRequestCardObject> = typed<PostInvoicesRequestCardObject>(object({
  get installments() { return optional(PostInvoicesRequestCardObjectInstallmentsSchema) },
  requestThreeDSecure: optional(string()),
}));