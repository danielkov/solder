import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { OutboundPaymentsPaymentMethodDetailsFinancialAccount } from './OutboundPaymentsPaymentMethodDetailsFinancialAccount';
import { OutboundPaymentsPaymentMethodDetailsFinancialAccountSchema } from './OutboundPaymentsPaymentMethodDetailsFinancialAccount';
import type { OutboundPaymentsPaymentMethodDetailsUsBankAccount } from './OutboundPaymentsPaymentMethodDetailsUsBankAccount';
import { OutboundPaymentsPaymentMethodDetailsUsBankAccountSchema } from './OutboundPaymentsPaymentMethodDetailsUsBankAccount';
import type { TreasurySharedResourceBillingDetails } from './TreasurySharedResourceBillingDetails';
import { TreasurySharedResourceBillingDetailsSchema } from './TreasurySharedResourceBillingDetails';
/**
 * OutboundPaymentsPaymentMethodDetails
 *
 * 
 */
export interface OutboundPaymentsPaymentMethodDetails {
  /**
   * TreasurySharedResourceBillingDetails
   *
   * 
   */
  billingDetails: TreasurySharedResourceBillingDetails;
  /**
   * outbound_payments_payment_method_details_financial_account
   *
   * 
   */
  financialAccount?: OutboundPaymentsPaymentMethodDetailsFinancialAccount;
  /**
   * The type of the payment method used in the OutboundPayment.
   */
  type: string;
  /**
   * outbound_payments_payment_method_details_us_bank_account
   *
   * 
   */
  usBankAccount?: OutboundPaymentsPaymentMethodDetailsUsBankAccount;
}

export const OutboundPaymentsPaymentMethodDetailsSchema: TypedSchema<OutboundPaymentsPaymentMethodDetails> = typed<OutboundPaymentsPaymentMethodDetails>(object({
  billingDetails: TreasurySharedResourceBillingDetailsSchema,
  get financialAccount() { return optional(OutboundPaymentsPaymentMethodDetailsFinancialAccountSchema) },
  type: string(),
  get usBankAccount() { return optional(OutboundPaymentsPaymentMethodDetailsUsBankAccountSchema) },
}));