import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { OutboundTransfersPaymentMethodDetailsFinancialAccount } from './OutboundTransfersPaymentMethodDetailsFinancialAccount';
import { OutboundTransfersPaymentMethodDetailsFinancialAccountSchema } from './OutboundTransfersPaymentMethodDetailsFinancialAccount';
import type { OutboundTransfersPaymentMethodDetailsUsBankAccount } from './OutboundTransfersPaymentMethodDetailsUsBankAccount';
import { OutboundTransfersPaymentMethodDetailsUsBankAccountSchema } from './OutboundTransfersPaymentMethodDetailsUsBankAccount';
import type { TreasurySharedResourceBillingDetails } from './TreasurySharedResourceBillingDetails';
import { TreasurySharedResourceBillingDetailsSchema } from './TreasurySharedResourceBillingDetails';
/**
 * OutboundTransfersPaymentMethodDetails
 *
 * 
 */
export interface OutboundTransfersPaymentMethodDetails {
  /**
   * TreasurySharedResourceBillingDetails
   *
   * 
   */
  billingDetails: TreasurySharedResourceBillingDetails;
  /**
   * outbound_transfers_payment_method_details_financial_account
   *
   * 
   */
  financialAccount?: OutboundTransfersPaymentMethodDetailsFinancialAccount;
  /**
   * The type of the payment method used in the OutboundTransfer.
   */
  type: string;
  /**
   * outbound_transfers_payment_method_details_us_bank_account
   *
   * 
   */
  usBankAccount?: OutboundTransfersPaymentMethodDetailsUsBankAccount;
}

export const OutboundTransfersPaymentMethodDetailsSchema: TypedSchema<OutboundTransfersPaymentMethodDetails> = typed<OutboundTransfersPaymentMethodDetails>(object({
  billingDetails: TreasurySharedResourceBillingDetailsSchema,
  get financialAccount() { return optional(OutboundTransfersPaymentMethodDetailsFinancialAccountSchema) },
  type: string(),
  get usBankAccount() { return optional(OutboundTransfersPaymentMethodDetailsUsBankAccountSchema) },
}));