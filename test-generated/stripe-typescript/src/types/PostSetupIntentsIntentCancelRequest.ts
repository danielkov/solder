import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostSetupIntentsIntentCancelRequest {
  /**
   * Reason for canceling this SetupIntent. Possible values are: `abandoned`, `requested_by_customer`, or `duplicate`
   */
  cancellationReason?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostSetupIntentsIntentCancelRequestSchema: TypedSchema<PostSetupIntentsIntentCancelRequest> = typed<PostSetupIntentsIntentCancelRequest>(object({
  cancellationReason: optional(string()),
  expand: optional(array(string())),
}));