import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * refund_destination_details_jp_bank_transfer
 *
 * 
 */
export interface RefundDestinationDetailsJpBankTransfer {
  /**
   * The reference assigned to the refund.
   */
  reference?: string;
  /**
   * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
   */
  referenceStatus?: string;
}

export const RefundDestinationDetailsJpBankTransferSchema: TypedSchema<RefundDestinationDetailsJpBankTransfer> = typed<RefundDestinationDetailsJpBankTransfer>(object({
  reference: optional(string()),
  referenceStatus: optional(string()),
}));