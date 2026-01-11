import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_giropay
 *
 * 
 */
export interface PaymentMethodDetailsGiropay {
  /**
   * Bank code of bank associated with the bank account.
   */
  bankCode?: string;
  /**
   * Name of the bank associated with the bank account.
   */
  bankName?: string;
  /**
   * Bank Identifier Code of the bank associated with the bank account.
   */
  bic?: string;
  /**
   * Owner's verified full name. Values are verified or provided by Giropay directly
(if supported) at the time of authorization or settlement. They cannot be set or mutated.
Giropay rarely provides this information so the attribute is usually empty.
   */
  verifiedName?: string;
}

export const PaymentMethodDetailsGiropaySchema: TypedSchema<PaymentMethodDetailsGiropay> = typed<PaymentMethodDetailsGiropay>(object({
  bankCode: optional(string()),
  bankName: optional(string()),
  bic: optional(string()),
  verifiedName: optional(string()),
}));