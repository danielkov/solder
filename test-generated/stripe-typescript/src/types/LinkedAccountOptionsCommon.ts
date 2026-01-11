import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentFlowsPrivatePaymentMethodsFinancialConnectionsCommonLinkedAccountOptionsFilters } from './PaymentFlowsPrivatePaymentMethodsFinancialConnectionsCommonLinkedAccountOptionsFilters';
import { PaymentFlowsPrivatePaymentMethodsFinancialConnectionsCommonLinkedAccountOptionsFiltersSchema } from './PaymentFlowsPrivatePaymentMethodsFinancialConnectionsCommonLinkedAccountOptionsFilters';
/**
 * linked_account_options_common
 *
 * 
 */
export interface LinkedAccountOptionsCommon {
  /**
   * PaymentFlowsPrivatePaymentMethodsFinancialConnectionsCommonLinkedAccountOptionsFilters
   *
   * 
   */
  filters?: PaymentFlowsPrivatePaymentMethodsFinancialConnectionsCommonLinkedAccountOptionsFilters;
  /**
   * The list of permissions to request. The `payment_method` permission must be included.
   */
  permissions?: Array<string>;
  /**
   * Data features requested to be retrieved upon account creation.
   */
  prefetch?: Array<string>;
  /**
   * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
   */
  returnUrl?: string;
}

export const LinkedAccountOptionsCommonSchema: TypedSchema<LinkedAccountOptionsCommon> = typed<LinkedAccountOptionsCommon>(object({
  get filters() { return optional(PaymentFlowsPrivatePaymentMethodsFinancialConnectionsCommonLinkedAccountOptionsFiltersSchema) },
  permissions: optional(array(string())),
  prefetch: optional(array(string())),
  returnUrl: optional(string()),
}));