import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * token_card_networks
 *
 * 
 */
export interface TokenCardNetworks {
  /**
   * The preferred network for co-branded cards. Can be `cartes_bancaires`, `mastercard`, `visa` or `invalid_preference` if requested network is not valid for the card.
   */
  preferred?: string;
}

export const TokenCardNetworksSchema: TypedSchema<TokenCardNetworks> = typed<TokenCardNetworks>(object({
  preferred: optional(string()),
}));