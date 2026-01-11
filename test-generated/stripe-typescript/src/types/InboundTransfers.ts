import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InboundTransfersPaymentMethodDetailsUsBankAccount } from './InboundTransfersPaymentMethodDetailsUsBankAccount';
import { InboundTransfersPaymentMethodDetailsUsBankAccountSchema } from './InboundTransfersPaymentMethodDetailsUsBankAccount';
import type { TreasurySharedResourceBillingDetails } from './TreasurySharedResourceBillingDetails';
import { TreasurySharedResourceBillingDetailsSchema } from './TreasurySharedResourceBillingDetails';
/**
 * InboundTransfers
 *
 * 
 */
export interface InboundTransfers {
  /**
   * TreasurySharedResourceBillingDetails
   *
   * 
   */
  billingDetails: TreasurySharedResourceBillingDetails;
  /**
   * The type of the payment method used in the InboundTransfer.
   */
  type: string;
  /**
   * inbound_transfers_payment_method_details_us_bank_account
   *
   * 
   */
  usBankAccount?: InboundTransfersPaymentMethodDetailsUsBankAccount;
}

export const InboundTransfersSchema: TypedSchema<InboundTransfers> = typed<InboundTransfers>(object({
  billingDetails: TreasurySharedResourceBillingDetailsSchema,
  type: string(),
  get usBankAccount() { return optional(InboundTransfersPaymentMethodDetailsUsBankAccountSchema) },
}));