import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersTreasuryOutboundPaymentsIdReturnRequestReturnedDetails } from './PostTestHelpersTreasuryOutboundPaymentsIdReturnRequestReturnedDetails';
import { PostTestHelpersTreasuryOutboundPaymentsIdReturnRequestReturnedDetailsSchema } from './PostTestHelpersTreasuryOutboundPaymentsIdReturnRequestReturnedDetails';
export interface PostTestHelpersTreasuryOutboundPaymentsIdReturnRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * returned_details_params
   *
   * Optional hash to set the return code.
   */
  returnedDetails?: PostTestHelpersTreasuryOutboundPaymentsIdReturnRequestReturnedDetails;
}

export const PostTestHelpersTreasuryOutboundPaymentsIdReturnRequestSchema: TypedSchema<PostTestHelpersTreasuryOutboundPaymentsIdReturnRequest> = typed<PostTestHelpersTreasuryOutboundPaymentsIdReturnRequest>(object({
  expand: optional(array(string())),
  get returnedDetails() { return optional(PostTestHelpersTreasuryOutboundPaymentsIdReturnRequestReturnedDetailsSchema) },
}));