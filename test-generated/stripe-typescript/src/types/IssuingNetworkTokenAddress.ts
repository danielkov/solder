import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingNetworkTokenAddress
 *
 * 
 */
export interface IssuingNetworkTokenAddress {
  /**
   * The street address of the cardholder tokenizing the card.
   */
  line1: string;
  /**
   * The postal code of the cardholder tokenizing the card.
   */
  postalCode: string;
}

export const IssuingNetworkTokenAddressSchema: TypedSchema<IssuingNetworkTokenAddress> = typed<IssuingNetworkTokenAddress>(object({
  line1: string(),
  postalCode: string(),
}));