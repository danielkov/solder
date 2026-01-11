import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MandateOrRef } from './MandateOrRef';
import { MandateOrRefSchema } from './MandateOrRef';
/**
 * outbound_transfers_payment_method_details_us_bank_account
 *
 * 
 */
export interface OutboundTransfersPaymentMethodDetailsUsBankAccount {
  /**
   * Account holder type: individual or company.
   */
  accountHolderType?: string;
  /**
   * Account type: checkings or savings. Defaults to checking if omitted.
   */
  accountType?: string;
  /**
   * Name of the bank associated with the bank account.
   */
  bankName?: string;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string;
  /**
   * Last four digits of the bank account number.
   */
  last4?: string;
  /**
   * ID of the mandate used to make this payment.
   */
  mandate?: MandateOrRef;
  /**
   * The network rails used. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
   */
  network: string;
  /**
   * Routing number of the bank account.
   */
  routingNumber?: string;
}

export const OutboundTransfersPaymentMethodDetailsUsBankAccountSchema: TypedSchema<OutboundTransfersPaymentMethodDetailsUsBankAccount> = typed<OutboundTransfersPaymentMethodDetailsUsBankAccount>(object({
  accountHolderType: optional(string()),
  accountType: optional(string()),
  bankName: optional(string()),
  fingerprint: optional(string()),
  last4: optional(string()),
  get mandate() { return optional(MandateOrRefSchema) },
  network: string(),
  routingNumber: optional(string()),
}));