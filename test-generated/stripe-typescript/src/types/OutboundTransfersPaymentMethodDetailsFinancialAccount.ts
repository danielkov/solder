import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * outbound_transfers_payment_method_details_financial_account
 *
 * 
 */
export interface OutboundTransfersPaymentMethodDetailsFinancialAccount {
  /**
   * Token of the FinancialAccount.
   */
  id: string;
  /**
   * The rails used to send funds.
   */
  network: string;
}

export const OutboundTransfersPaymentMethodDetailsFinancialAccountSchema: TypedSchema<OutboundTransfersPaymentMethodDetailsFinancialAccount> = typed<OutboundTransfersPaymentMethodDetailsFinancialAccount>(object({
  id: string(),
  network: string(),
}));