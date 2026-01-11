import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * refund_destination_details_swish
 *
 * 
 */
export interface RefundDestinationDetailsSwish {
  /**
   * For refunds declined by the network, a decline code provided by the network which indicates the reason the refund failed.
   */
  networkDeclineCode?: string;
  /**
   * The reference assigned to the refund.
   */
  reference?: string;
  /**
   * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
   */
  referenceStatus?: string;
}

export const RefundDestinationDetailsSwishSchema: TypedSchema<RefundDestinationDetailsSwish> = typed<RefundDestinationDetailsSwish>(object({
  networkDeclineCode: optional(string()),
  reference: optional(string()),
  referenceStatus: optional(string()),
}));