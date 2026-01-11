import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestSegmentsItem } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestSegmentsItem';
import { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestSegmentsItemSchema } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestSegmentsItem';
/**
 * flight_specs
 */
export interface PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFlight {
  departureAt?: number;
  passengerName?: string;
  refundable?: boolean;
  segments?: Array<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestSegmentsItem>;
  travelAgency?: string;
}

export const PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFlightSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFlight> = typed<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFlight>(object({
  departureAt: optional(number()),
  passengerName: optional(string()),
  refundable: optional(boolean()),
  get segments() { return optional(array(PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestSegmentsItemSchema)) },
  travelAgency: optional(string()),
}));