import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * lodging_specs
 */
export interface PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestLodging {
  checkInAt?: number;
  nights?: number;
}

export const PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestLodgingSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestLodging> = typed<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestLodging>(object({
  checkInAt: optional(number()),
  nights: optional(number()),
}));