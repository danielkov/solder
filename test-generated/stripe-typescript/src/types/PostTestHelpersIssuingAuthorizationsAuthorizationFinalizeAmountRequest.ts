import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostTestHelpersIssuingAuthorizationsRequestFuel } from './DefaultPostTestHelpersIssuingAuthorizationsRequestFuel';
import { DefaultPostTestHelpersIssuingAuthorizationsRequestFuelSchema } from './DefaultPostTestHelpersIssuingAuthorizationsRequestFuel';
import type { PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequestFleet } from './PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequestFleet';
import { PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequestFleetSchema } from './PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequestFleet';
export interface PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The final authorization amount that will be captured by the merchant. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  finalAmount: number;
  /**
   * fleet_specs
   *
   * Fleet-specific information for authorizations using Fleet cards.
   */
  fleet?: PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequestFleet;
  /**
   * fuel_specs
   *
   * Information about fuel that was purchased with this transaction.
   */
  fuel?: DefaultPostTestHelpersIssuingAuthorizationsRequestFuel;
}

export const PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequestSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequest> = typed<PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequest>(object({
  expand: optional(array(string())),
  finalAmount: number(),
  get fleet() { return optional(PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequestFleetSchema) },
  get fuel() { return optional(DefaultPostTestHelpersIssuingAuthorizationsRequestFuelSchema) },
}));