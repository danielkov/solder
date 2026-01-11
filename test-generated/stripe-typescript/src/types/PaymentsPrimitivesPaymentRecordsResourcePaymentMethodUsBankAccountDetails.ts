import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MandateOrRef } from './MandateOrRef';
import { MandateOrRefSchema } from './MandateOrRef';
/**
 * PaymentsPrimitivesPaymentRecordsResourcePaymentMethodUsBankAccountDetails
 *
 * 
 */
export interface PaymentsPrimitivesPaymentRecordsResourcePaymentMethodUsBankAccountDetails {
  /**
   * The type of entity that holds the account. This can be either 'individual' or 'company'.
   */
  accountHolderType?: string;
  /**
   * The type of the bank account. This can be either 'checking' or 'savings'.
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
   * The ACH payment reference for this transaction.
   */
  paymentReference?: string;
  /**
   * The routing number for the bank account.
   */
  routingNumber?: string;
}

export const PaymentsPrimitivesPaymentRecordsResourcePaymentMethodUsBankAccountDetailsSchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodUsBankAccountDetails> = typed<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodUsBankAccountDetails>(object({
  accountHolderType: optional(string()),
  accountType: optional(string()),
  bankName: optional(string()),
  fingerprint: optional(string()),
  last4: optional(string()),
  get mandate() { return optional(MandateOrRefSchema) },
  paymentReference: optional(string()),
  routingNumber: optional(string()),
}));