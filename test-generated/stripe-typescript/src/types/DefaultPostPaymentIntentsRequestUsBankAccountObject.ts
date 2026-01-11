import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnections } from './DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnections';
import { DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnectionsSchema } from './DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnections';
import type { DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptions } from './DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptions';
import { DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptionsSchema } from './DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptions';
import type { DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworks } from './DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworks';
import { DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworksSchema } from './DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworks';
/**
 * payment_intent_payment_method_options_param
 */
export interface DefaultPostPaymentIntentsRequestUsBankAccountObject {
  /**
   * linked_account_options_param
   */
  financialConnections?: DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnections;
  /**
   * mandate_options_param
   */
  mandateOptions?: DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptions;
  /**
   * networks_options_param
   */
  networks?: DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworks;
  preferredSettlementSpeed?: string;
  setupFutureUsage?: string;
  targetDate?: string;
  verificationMethod?: string;
}

export const DefaultPostPaymentIntentsRequestUsBankAccountObjectSchema: TypedSchema<DefaultPostPaymentIntentsRequestUsBankAccountObject> = typed<DefaultPostPaymentIntentsRequestUsBankAccountObject>(object({
  get financialConnections() { return optional(DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnectionsSchema) },
  get mandateOptions() { return optional(DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptionsSchema) },
  get networks() { return optional(DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworksSchema) },
  preferredSettlementSpeed: optional(string()),
  setupFutureUsage: optional(string()),
  targetDate: optional(string()),
  verificationMethod: optional(string()),
}));