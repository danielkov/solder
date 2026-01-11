import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails';
import { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetailsSchema } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails';
export interface PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequest {
  /**
   * The amount to capture from the authorization. If not provided, the full amount of the authorization will be captured. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  captureAmount?: number;
  /**
   * Whether to close the authorization after capture. Defaults to true. Set to false to enable multi-capture flows.
   */
  closeAuthorization?: boolean;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * purchase_details_specs
   *
   * Additional purchase information that is optionally provided by the merchant.
   */
  purchaseDetails?: PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails;
}

export const PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequest> = typed<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequest>(object({
  captureAmount: optional(number()),
  closeAuthorization: optional(boolean()),
  expand: optional(array(string())),
  get purchaseDetails() { return optional(PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetailsSchema) },
}));