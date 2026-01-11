import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_card_network_token
 *
 * 
 */
export interface PaymentMethodDetailsCardNetworkToken {
  /**
   * Indicates if Stripe used a network token, either user provided or Stripe managed when processing the transaction.
   */
  used: boolean;
}

export const PaymentMethodDetailsCardNetworkTokenSchema: TypedSchema<PaymentMethodDetailsCardNetworkToken> = typed<PaymentMethodDetailsCardNetworkToken>(object({
  used: boolean(),
}));