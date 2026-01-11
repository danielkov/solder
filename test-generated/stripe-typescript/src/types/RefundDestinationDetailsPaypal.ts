import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * refund_destination_details_paypal
 *
 * 
 */
export interface RefundDestinationDetailsPaypal {
  /**
   * For refunds declined by the network, a decline code provided by the network which indicates the reason the refund failed.
   */
  networkDeclineCode?: string;
}

export const RefundDestinationDetailsPaypalSchema: TypedSchema<RefundDestinationDetailsPaypal> = typed<RefundDestinationDetailsPaypal>(object({
  networkDeclineCode: optional(string()),
}));