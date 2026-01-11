import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestFinancialConnections } from './PostCheckoutSessionsRequestFinancialConnections';
import { PostCheckoutSessionsRequestFinancialConnectionsSchema } from './PostCheckoutSessionsRequestFinancialConnections';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestUsBankAccount {
  /**
   * linked_account_options_param
   */
  financialConnections?: PostCheckoutSessionsRequestFinancialConnections;
  setupFutureUsage?: string;
  targetDate?: string;
  verificationMethod?: string;
}

export const PostCheckoutSessionsRequestUsBankAccountSchema: TypedSchema<PostCheckoutSessionsRequestUsBankAccount> = typed<PostCheckoutSessionsRequestUsBankAccount>(object({
  get financialConnections() { return optional(PostCheckoutSessionsRequestFinancialConnectionsSchema) },
  setupFutureUsage: optional(string()),
  targetDate: optional(string()),
  verificationMethod: optional(string()),
}));