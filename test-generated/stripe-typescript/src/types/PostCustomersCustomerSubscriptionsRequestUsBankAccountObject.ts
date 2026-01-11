import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFinancialConnections } from './PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFinancialConnections';
import { PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFinancialConnectionsSchema } from './PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFinancialConnections';
/**
 * invoice_payment_method_options_param
 */
export interface PostCustomersCustomerSubscriptionsRequestUsBankAccountObject {
  /**
   * invoice_linked_account_options_param
   */
  financialConnections?: PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFinancialConnections;
  verificationMethod?: string;
}

export const PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestUsBankAccountObject> = typed<PostCustomersCustomerSubscriptionsRequestUsBankAccountObject>(object({
  get financialConnections() { return optional(PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFinancialConnectionsSchema) },
  verificationMethod: optional(string()),
}));