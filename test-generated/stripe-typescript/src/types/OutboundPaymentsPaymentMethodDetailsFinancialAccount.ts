import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * outbound_payments_payment_method_details_financial_account
 *
 * 
 */
export interface OutboundPaymentsPaymentMethodDetailsFinancialAccount {
  /**
   * Token of the FinancialAccount.
   */
  id: string;
  /**
   * The rails used to send funds.
   */
  network: string;
}

export const OutboundPaymentsPaymentMethodDetailsFinancialAccountSchema: TypedSchema<OutboundPaymentsPaymentMethodDetailsFinancialAccount> = typed<OutboundPaymentsPaymentMethodDetailsFinancialAccount>(object({
  id: string(),
  network: string(),
}));