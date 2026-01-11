import { TypedSchema, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { FundingInstructionsBankTransfer } from './FundingInstructionsBankTransfer';
import { FundingInstructionsBankTransferSchema } from './FundingInstructionsBankTransfer';
/**
 * CustomerBalanceFundingInstructionsCustomerBalanceFundingInstructions
 *
 * Each customer has a [`balance`](https://stripe.com/docs/api/customers/object#customer_object-balance) that is
automatically applied to future invoices and payments using the `customer_balance` payment method.
Customers can fund this balance by initiating a bank transfer to any account in the
`financial_addresses` field.
Related guide: [Customer balance funding instructions](https://stripe.com/docs/payments/customer-balance/funding-instructions)
 */
export interface FundingInstructions {
  /**
   * FundingInstructionsBankTransfer
   *
   * 
   */
  bankTransfer: FundingInstructionsBankTransfer;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The `funding_type` of the returned instructions
   */
  fundingType: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
}

export const FundingInstructionsSchema: TypedSchema<FundingInstructions> = typed<FundingInstructions>(object({
  bankTransfer: FundingInstructionsBankTransferSchema,
  currency: string(),
  fundingType: string(),
  livemode: boolean(),
  object: string(),
}));