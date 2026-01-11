import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostBillingMetersIdRequest {
  /**
   * The meter’s name. Not visible to the customer.
   */
  displayName?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostBillingMetersIdRequestSchema: TypedSchema<PostBillingMetersIdRequest> = typed<PostBillingMetersIdRequest>(object({
  displayName: optional(string()),
  expand: optional(array(string())),
}));