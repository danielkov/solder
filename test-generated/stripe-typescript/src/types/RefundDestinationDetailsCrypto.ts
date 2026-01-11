import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * refund_destination_details_crypto
 *
 * 
 */
export interface RefundDestinationDetailsCrypto {
  /**
   * The transaction hash of the refund.
   */
  reference?: string;
}

export const RefundDestinationDetailsCryptoSchema: TypedSchema<RefundDestinationDetailsCrypto> = typed<RefundDestinationDetailsCrypto>(object({
  reference: optional(string()),
}));