import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * refund_destination_details_multibanco
 *
 * 
 */
export interface RefundDestinationDetailsMultibanco {
  /**
   * The reference assigned to the refund.
   */
  reference?: string;
  /**
   * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
   */
  referenceStatus?: string;
}

export const RefundDestinationDetailsMultibancoSchema: TypedSchema<RefundDestinationDetailsMultibanco> = typed<RefundDestinationDetailsMultibanco>(object({
  reference: optional(string()),
  referenceStatus: optional(string()),
}));