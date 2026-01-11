import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * refund_destination_details_mb_way
 *
 * 
 */
export interface RefundDestinationDetailsMbWay {
  /**
   * The reference assigned to the refund.
   */
  reference?: string;
  /**
   * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
   */
  referenceStatus?: string;
}

export const RefundDestinationDetailsMbWaySchema: TypedSchema<RefundDestinationDetailsMbWay> = typed<RefundDestinationDetailsMbWay>(object({
  reference: optional(string()),
  referenceStatus: optional(string()),
}));