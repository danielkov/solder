import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * refund_destination_details_th_bank_transfer
 *
 * 
 */
export interface RefundDestinationDetailsThBankTransfer {
  /**
   * The reference assigned to the refund.
   */
  reference?: string;
  /**
   * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
   */
  referenceStatus?: string;
}

export const RefundDestinationDetailsThBankTransferSchema: TypedSchema<RefundDestinationDetailsThBankTransfer> = typed<RefundDestinationDetailsThBankTransfer>(object({
  reference: optional(string()),
  referenceStatus: optional(string()),
}));