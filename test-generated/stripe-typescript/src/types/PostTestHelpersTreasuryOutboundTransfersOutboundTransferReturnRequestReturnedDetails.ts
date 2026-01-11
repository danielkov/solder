import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * returned_details_params
 *
 * Details about a returned OutboundTransfer.
 */
export interface PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequestReturnedDetails {
  code?: string;
}

export const PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequestReturnedDetailsSchema: TypedSchema<PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequestReturnedDetails> = typed<PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequestReturnedDetails>(object({
  code: optional(string()),
}));