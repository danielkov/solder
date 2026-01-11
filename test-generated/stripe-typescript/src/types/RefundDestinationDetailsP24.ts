import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * refund_destination_details_p24
 *
 * 
 */
export interface RefundDestinationDetailsP24 {
  /**
   * The reference assigned to the refund.
   */
  reference?: string;
  /**
   * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
   */
  referenceStatus?: string;
}

export const RefundDestinationDetailsP24Schema: TypedSchema<RefundDestinationDetailsP24> = typed<RefundDestinationDetailsP24>(object({
  reference: optional(string()),
  referenceStatus: optional(string()),
}));