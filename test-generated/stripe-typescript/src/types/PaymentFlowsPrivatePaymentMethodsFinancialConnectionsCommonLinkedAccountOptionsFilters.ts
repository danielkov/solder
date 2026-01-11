import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPrivatePaymentMethodsFinancialConnectionsCommonLinkedAccountOptionsFilters
 *
 * 
 */
export interface PaymentFlowsPrivatePaymentMethodsFinancialConnectionsCommonLinkedAccountOptionsFilters {
  /**
   * The account subcategories to use to filter for possible accounts to link. Valid subcategories are `checking` and `savings`.
   */
  accountSubcategories?: Array<string>;
}

export const PaymentFlowsPrivatePaymentMethodsFinancialConnectionsCommonLinkedAccountOptionsFiltersSchema: TypedSchema<PaymentFlowsPrivatePaymentMethodsFinancialConnectionsCommonLinkedAccountOptionsFilters> = typed<PaymentFlowsPrivatePaymentMethodsFinancialConnectionsCommonLinkedAccountOptionsFilters>(object({
  accountSubcategories: optional(array(string())),
}));