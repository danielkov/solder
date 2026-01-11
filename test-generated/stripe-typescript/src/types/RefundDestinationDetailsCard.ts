import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * refund_destination_details_card
 *
 * 
 */
export interface RefundDestinationDetailsCard {
  /**
   * Value of the reference number assigned to the refund.
   */
  reference?: string;
  /**
   * Status of the reference number on the refund. This can be `pending`, `available` or `unavailable`.
   */
  referenceStatus?: string;
  /**
   * Type of the reference number assigned to the refund.
   */
  referenceType?: string;
  /**
   * The type of refund. This can be `refund`, `reversal`, or `pending`.
   */
  type: string;
}

export const RefundDestinationDetailsCardSchema: TypedSchema<RefundDestinationDetailsCard> = typed<RefundDestinationDetailsCard>(object({
  reference: optional(string()),
  referenceStatus: optional(string()),
  referenceType: optional(string()),
  type: string(),
}));