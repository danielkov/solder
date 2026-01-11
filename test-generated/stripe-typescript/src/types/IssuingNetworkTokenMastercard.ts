import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingNetworkTokenMastercard
 *
 * 
 */
export interface IssuingNetworkTokenMastercard {
  /**
   * A unique reference ID from MasterCard to represent the card account number.
   */
  cardReferenceId?: string;
  /**
   * The network-unique identifier for the token.
   */
  tokenReferenceId: string;
  /**
   * The ID of the entity requesting tokenization, specific to MasterCard.
   */
  tokenRequestorId: string;
  /**
   * The name of the entity requesting tokenization, if known. This is directly provided from MasterCard.
   */
  tokenRequestorName?: string;
}

export const IssuingNetworkTokenMastercardSchema: TypedSchema<IssuingNetworkTokenMastercard> = typed<IssuingNetworkTokenMastercard>(object({
  cardReferenceId: optional(string()),
  tokenReferenceId: string(),
  tokenRequestorId: string(),
  tokenRequestorName: optional(string()),
}));