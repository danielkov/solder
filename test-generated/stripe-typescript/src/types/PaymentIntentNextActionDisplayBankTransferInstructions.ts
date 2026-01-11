import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { FundingInstructionsBankTransferFinancialAddress } from './FundingInstructionsBankTransferFinancialAddress';
import { FundingInstructionsBankTransferFinancialAddressSchema } from './FundingInstructionsBankTransferFinancialAddress';
/**
 * PaymentIntentNextActionDisplayBankTransferInstructions
 *
 * 
 */
export interface PaymentIntentNextActionDisplayBankTransferInstructions {
  /**
   * The remaining amount that needs to be transferred to complete the payment.
   */
  amountRemaining?: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;
  /**
   * A list of financial addresses that can be used to fund the customer balance
   */
  financialAddresses?: Array<FundingInstructionsBankTransferFinancialAddress>;
  /**
   * A link to a hosted page that guides your customer through completing the transfer.
   */
  hostedInstructionsUrl?: string;
  /**
   * A string identifying this payment. Instruct your customer to include this code in the reference or memo field of their bank transfer.
   */
  reference?: string;
  /**
   * Type of bank transfer
   */
  type: string;
}

export const PaymentIntentNextActionDisplayBankTransferInstructionsSchema: TypedSchema<PaymentIntentNextActionDisplayBankTransferInstructions> = typed<PaymentIntentNextActionDisplayBankTransferInstructions>(object({
  amountRemaining: optional(number()),
  currency: optional(string()),
  get financialAddresses() { return optional(array(FundingInstructionsBankTransferFinancialAddressSchema)) },
  hostedInstructionsUrl: optional(string()),
  reference: optional(string()),
  type: string(),
}));