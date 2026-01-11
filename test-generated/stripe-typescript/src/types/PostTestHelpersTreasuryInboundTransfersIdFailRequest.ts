import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersTreasuryInboundTransfersIdFailRequestFailureDetails } from './PostTestHelpersTreasuryInboundTransfersIdFailRequestFailureDetails';
import { PostTestHelpersTreasuryInboundTransfersIdFailRequestFailureDetailsSchema } from './PostTestHelpersTreasuryInboundTransfersIdFailRequestFailureDetails';
export interface PostTestHelpersTreasuryInboundTransfersIdFailRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * failure_details_param
   *
   * Details about a failed InboundTransfer.
   */
  failureDetails?: PostTestHelpersTreasuryInboundTransfersIdFailRequestFailureDetails;
}

export const PostTestHelpersTreasuryInboundTransfersIdFailRequestSchema: TypedSchema<PostTestHelpersTreasuryInboundTransfersIdFailRequest> = typed<PostTestHelpersTreasuryInboundTransfersIdFailRequest>(object({
  expand: optional(array(string())),
  get failureDetails() { return optional(PostTestHelpersTreasuryInboundTransfersIdFailRequestFailureDetailsSchema) },
}));