import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostTestHelpersIssuingAuthorizationsAuthorizationIncrementRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The amount to increment the authorization by. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  incrementAmount: number;
  /**
   * If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
   */
  isAmountControllable?: boolean;
}

export const PostTestHelpersIssuingAuthorizationsAuthorizationIncrementRequestSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsAuthorizationIncrementRequest> = typed<PostTestHelpersIssuingAuthorizationsAuthorizationIncrementRequest>(object({
  expand: optional(array(string())),
  incrementAmount: number(),
  isAmountControllable: optional(boolean()),
}));