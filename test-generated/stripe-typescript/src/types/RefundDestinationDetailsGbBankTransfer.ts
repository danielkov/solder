import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * refund_destination_details_gb_bank_transfer
 *
 * 
 */
export interface RefundDestinationDetailsGbBankTransfer {
  /**
   * The reference assigned to the refund.
   */
  reference?: string;
  /**
   * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
   */
  referenceStatus?: string;
}

export const RefundDestinationDetailsGbBankTransferSchema: TypedSchema<RefundDestinationDetailsGbBankTransfer> = typed<RefundDestinationDetailsGbBankTransfer>(object({
  reference: optional(string()),
  referenceStatus: optional(string()),
}));