import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_card_present_networks
 *
 * 
 */
export interface PaymentMethodCardPresentNetworks {
  /**
   * All networks available for selection via [payment_method_options.card.network](/api/payment_intents/confirm#confirm_payment_intent-payment_method_options-card-network).
   */
  available: Array<string>;
  /**
   * The preferred network for the card.
   */
  preferred?: string;
}

export const PaymentMethodCardPresentNetworksSchema: TypedSchema<PaymentMethodCardPresentNetworks> = typed<PaymentMethodCardPresentNetworks>(object({
  available: array(string()),
  preferred: optional(string()),
}));