import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * refund_destination_details_mx_bank_transfer
 *
 * 
 */
export interface RefundDestinationDetailsMxBankTransfer {
  /**
   * The reference assigned to the refund.
   */
  reference?: string;
  /**
   * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
   */
  referenceStatus?: string;
}

export const RefundDestinationDetailsMxBankTransferSchema: TypedSchema<RefundDestinationDetailsMxBankTransfer> = typed<RefundDestinationDetailsMxBankTransfer>(object({
  reference: optional(string()),
  referenceStatus: optional(string()),
}));