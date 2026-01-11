import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * refund_destination_details_br_bank_transfer
 *
 * 
 */
export interface RefundDestinationDetailsBrBankTransfer {
  /**
   * The reference assigned to the refund.
   */
  reference?: string;
  /**
   * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
   */
  referenceStatus?: string;
}

export const RefundDestinationDetailsBrBankTransferSchema: TypedSchema<RefundDestinationDetailsBrBankTransfer> = typed<RefundDestinationDetailsBrBankTransfer>(object({
  reference: optional(string()),
  referenceStatus: optional(string()),
}));