import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * failure_details_param
 *
 * Details about a failed InboundTransfer.
 */
export interface PostTestHelpersTreasuryInboundTransfersIdFailRequestFailureDetails {
  code?: string;
}

export const PostTestHelpersTreasuryInboundTransfersIdFailRequestFailureDetailsSchema: TypedSchema<PostTestHelpersTreasuryInboundTransfersIdFailRequestFailureDetails> = typed<PostTestHelpersTreasuryInboundTransfersIdFailRequestFailureDetails>(object({
  code: optional(string()),
}));