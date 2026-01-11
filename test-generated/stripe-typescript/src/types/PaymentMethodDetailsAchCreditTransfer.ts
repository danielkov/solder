import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_ach_credit_transfer
 *
 * 
 */
export interface PaymentMethodDetailsAchCreditTransfer {
  /**
   * Account number to transfer funds to.
   */
  accountNumber?: string;
  /**
   * Name of the bank associated with the routing number.
   */
  bankName?: string;
  /**
   * Routing transit number for the bank account to transfer funds to.
   */
  routingNumber?: string;
  /**
   * SWIFT code of the bank associated with the routing number.
   */
  swiftCode?: string;
}

export const PaymentMethodDetailsAchCreditTransferSchema: TypedSchema<PaymentMethodDetailsAchCreditTransfer> = typed<PaymentMethodDetailsAchCreditTransfer>(object({
  accountNumber: optional(string()),
  bankName: optional(string()),
  routingNumber: optional(string()),
  swiftCode: optional(string()),
}));