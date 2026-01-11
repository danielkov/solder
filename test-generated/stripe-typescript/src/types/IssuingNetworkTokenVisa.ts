import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingNetworkTokenVisa
 *
 * 
 */
export interface IssuingNetworkTokenVisa {
  /**
   * A unique reference ID from Visa to represent the card account number.
   */
  cardReferenceId: string;
  /**
   * The network-unique identifier for the token.
   */
  tokenReferenceId: string;
  /**
   * The ID of the entity requesting tokenization, specific to Visa.
   */
  tokenRequestorId: string;
  /**
   * Degree of risk associated with the token between `01` and `99`, with higher number indicating higher risk. A `00` value indicates the token was not scored by Visa.
   */
  tokenRiskScore?: string;
}

export const IssuingNetworkTokenVisaSchema: TypedSchema<IssuingNetworkTokenVisa> = typed<IssuingNetworkTokenVisa>(object({
  cardReferenceId: string(),
  tokenReferenceId: string(),
  tokenRequestorId: string(),
  tokenRiskScore: optional(string()),
}));