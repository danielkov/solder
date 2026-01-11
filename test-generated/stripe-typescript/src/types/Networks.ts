import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * networks
 *
 * 
 */
export interface Networks {
  /**
   * All networks available for selection via [payment_method_options.card.network](/api/payment_intents/confirm#confirm_payment_intent-payment_method_options-card-network).
   */
  available: Array<string>;
  /**
   * The preferred network for co-branded cards. Can be `cartes_bancaires`, `mastercard`, `visa` or `invalid_preference` if requested network is not valid for the card.
   */
  preferred?: string;
}

export const NetworksSchema: TypedSchema<Networks> = typed<Networks>(object({
  available: array(string()),
  preferred: optional(string()),
}));