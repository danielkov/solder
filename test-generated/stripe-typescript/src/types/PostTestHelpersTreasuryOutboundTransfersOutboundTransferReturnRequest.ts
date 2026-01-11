import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequestReturnedDetails } from './PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequestReturnedDetails';
import { PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequestReturnedDetailsSchema } from './PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequestReturnedDetails';
export interface PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * returned_details_params
   *
   * Details about a returned OutboundTransfer.
   */
  returnedDetails?: PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequestReturnedDetails;
}

export const PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequestSchema: TypedSchema<PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequest> = typed<PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequest>(object({
  expand: optional(array(string())),
  get returnedDetails() { return optional(PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequestReturnedDetailsSchema) },
}));