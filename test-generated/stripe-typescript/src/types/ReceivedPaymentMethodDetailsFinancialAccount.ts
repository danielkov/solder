import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * received_payment_method_details_financial_account
 *
 * 
 */
export interface ReceivedPaymentMethodDetailsFinancialAccount {
  /**
   * The FinancialAccount ID.
   */
  id: string;
  /**
   * The rails the ReceivedCredit was sent over. A FinancialAccount can only send funds over `stripe`.
   */
  network: string;
}

export const ReceivedPaymentMethodDetailsFinancialAccountSchema: TypedSchema<ReceivedPaymentMethodDetailsFinancialAccount> = typed<ReceivedPaymentMethodDetailsFinancialAccount>(object({
  id: string(),
  network: string(),
}));