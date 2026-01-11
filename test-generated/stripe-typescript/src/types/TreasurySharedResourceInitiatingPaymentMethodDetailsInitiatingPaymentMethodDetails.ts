import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ReceivedPaymentMethodDetailsFinancialAccount } from './ReceivedPaymentMethodDetailsFinancialAccount';
import { ReceivedPaymentMethodDetailsFinancialAccountSchema } from './ReceivedPaymentMethodDetailsFinancialAccount';
import type { TreasurySharedResourceBillingDetails } from './TreasurySharedResourceBillingDetails';
import { TreasurySharedResourceBillingDetailsSchema } from './TreasurySharedResourceBillingDetails';
import type { TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount } from './TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount';
import { TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccountSchema } from './TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount';
/**
 * TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails
 *
 * 
 */
export interface TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails {
  /**
   * Set when `type` is `balance`.
   */
  balance?: string;
  /**
   * TreasurySharedResourceBillingDetails
   *
   * 
   */
  billingDetails: TreasurySharedResourceBillingDetails;
  /**
   * received_payment_method_details_financial_account
   *
   * 
   */
  financialAccount?: ReceivedPaymentMethodDetailsFinancialAccount;
  /**
   * Set when `type` is `issuing_card`. This is an [Issuing Card](https://stripe.com/docs/api#issuing_cards) ID.
   */
  issuingCard?: string;
  /**
   * Polymorphic type matching the originating money movement's source. This can be an external account, a Stripe balance, or a FinancialAccount.
   */
  type: string;
  /**
   * TreasurySharedResourceInitiatingPaymentMethodDetailsUSBankAccount
   *
   * 
   */
  usBankAccount?: TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount;
}

export const TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetailsSchema: TypedSchema<TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails> = typed<TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails>(object({
  balance: optional(string()),
  billingDetails: TreasurySharedResourceBillingDetailsSchema,
  get financialAccount() { return optional(ReceivedPaymentMethodDetailsFinancialAccountSchema) },
  issuingCard: optional(string()),
  type: string(),
  get usBankAccount() { return optional(TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccountSchema) },
}));