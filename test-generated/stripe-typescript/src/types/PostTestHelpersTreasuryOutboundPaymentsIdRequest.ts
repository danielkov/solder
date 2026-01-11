import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersTreasuryOutboundPaymentsIdRequestTrackingDetails } from './PostTestHelpersTreasuryOutboundPaymentsIdRequestTrackingDetails';
import { PostTestHelpersTreasuryOutboundPaymentsIdRequestTrackingDetailsSchema } from './PostTestHelpersTreasuryOutboundPaymentsIdRequestTrackingDetails';
export interface PostTestHelpersTreasuryOutboundPaymentsIdRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * tracking_details_params
   *
   * Details about network-specific tracking information.
   */
  trackingDetails: PostTestHelpersTreasuryOutboundPaymentsIdRequestTrackingDetails;
}

export const PostTestHelpersTreasuryOutboundPaymentsIdRequestSchema: TypedSchema<PostTestHelpersTreasuryOutboundPaymentsIdRequest> = typed<PostTestHelpersTreasuryOutboundPaymentsIdRequest>(object({
  expand: optional(array(string())),
  trackingDetails: PostTestHelpersTreasuryOutboundPaymentsIdRequestTrackingDetailsSchema,
}));