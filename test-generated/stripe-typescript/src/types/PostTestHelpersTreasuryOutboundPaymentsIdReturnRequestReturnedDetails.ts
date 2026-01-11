import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * returned_details_params
 *
 * Optional hash to set the return code.
 */
export interface PostTestHelpersTreasuryOutboundPaymentsIdReturnRequestReturnedDetails {
  code?: string;
}

export const PostTestHelpersTreasuryOutboundPaymentsIdReturnRequestReturnedDetailsSchema: TypedSchema<PostTestHelpersTreasuryOutboundPaymentsIdReturnRequestReturnedDetails> = typed<PostTestHelpersTreasuryOutboundPaymentsIdReturnRequestReturnedDetails>(object({
  code: optional(string()),
}));