import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFleet } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFleet';
import { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFleetSchema } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFleet';
import type { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFlight } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFlight';
import { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFlightSchema } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFlight';
import type { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFuel } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFuel';
import { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFuelSchema } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFuel';
import type { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestLodging } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestLodging';
import { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestLodgingSchema } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestLodging';
import type { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestReceiptItem } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestReceiptItem';
import { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestReceiptItemSchema } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestReceiptItem';
/**
 * purchase_details_specs
 *
 * Additional purchase information that is optionally provided by the merchant.
 */
export interface PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails {
  /**
   * fleet_specs
   */
  fleet?: PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFleet;
  /**
   * flight_specs
   */
  flight?: PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFlight;
  /**
   * fuel_specs
   */
  fuel?: PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFuel;
  /**
   * lodging_specs
   */
  lodging?: PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestLodging;
  receipt?: Array<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestReceiptItem>;
  reference?: string;
}

export const PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetailsSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails> = typed<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails>(object({
  get fleet() { return optional(PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFleetSchema) },
  get flight() { return optional(PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFlightSchema) },
  get fuel() { return optional(PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFuelSchema) },
  get lodging() { return optional(PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestLodgingSchema) },
  get receipt() { return optional(array(PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestReceiptItemSchema)) },
  reference: optional(string()),
}));