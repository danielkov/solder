import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostTestHelpersIssuingAuthorizationsAuthorizationReverseRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The amount to reverse from the authorization. If not provided, the full amount of the authorization will be reversed. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  reverseAmount?: number;
}

export const PostTestHelpersIssuingAuthorizationsAuthorizationReverseRequestSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsAuthorizationReverseRequest> = typed<PostTestHelpersIssuingAuthorizationsAuthorizationReverseRequest>(object({
  expand: optional(array(string())),
  reverseAmount: optional(number()),
}));