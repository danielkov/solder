import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * flight_segment_specs
 */
export interface PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestSegmentsItem {
  arrivalAirportCode?: string;
  carrier?: string;
  departureAirportCode?: string;
  flightNumber?: string;
  serviceClass?: string;
  stopoverAllowed?: boolean;
}

export const PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestSegmentsItemSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestSegmentsItem> = typed<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestSegmentsItem>(object({
  arrivalAirportCode: optional(string()),
  carrier: optional(string()),
  departureAirportCode: optional(string()),
  flightNumber: optional(string()),
  serviceClass: optional(string()),
  stopoverAllowed: optional(boolean()),
}));