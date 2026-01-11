import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnections } from './DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnections';
import { DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnectionsSchema } from './DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnections';
import type { DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptions } from './DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptions';
import { DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptionsSchema } from './DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptions';
import type { DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworks } from './DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworks';
import { DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworksSchema } from './DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworks';
/**
 * setup_intent_payment_method_options_param
 */
export interface PostSetupIntentsRequestUsBankAccount {
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
  verificationMethod?: string;
}

export const PostSetupIntentsRequestUsBankAccountSchema: TypedSchema<PostSetupIntentsRequestUsBankAccount> = typed<PostSetupIntentsRequestUsBankAccount>(object({
  get financialConnections() { return optional(DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnectionsSchema) },
  get mandateOptions() { return optional(DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptionsSchema) },
  get networks() { return optional(DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworksSchema) },
  verificationMethod: optional(string()),
}));