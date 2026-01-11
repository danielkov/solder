import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_crypto
 *
 * 
 */
export interface PaymentMethodDetailsCrypto {
  /**
   * The wallet address of the customer.
   */
  buyerAddress?: string;
  /**
   * The blockchain network that the transaction was sent on.
   */
  network?: string;
  /**
   * The token currency that the transaction was sent with.
   */
  tokenCurrency?: string;
  /**
   * The blockchain transaction hash of the crypto payment.
   */
  transactionHash?: string;
}

export const PaymentMethodDetailsCryptoSchema: TypedSchema<PaymentMethodDetailsCrypto> = typed<PaymentMethodDetailsCrypto>(object({
  buyerAddress: optional(string()),
  network: optional(string()),
  tokenCurrency: optional(string()),
  transactionHash: optional(string()),
}));