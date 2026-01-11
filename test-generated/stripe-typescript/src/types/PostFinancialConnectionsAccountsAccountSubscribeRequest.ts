import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostFinancialConnectionsAccountsAccountSubscribeRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The list of account features to which you would like to subscribe.
   */
  features: Array<string>;
}

export const PostFinancialConnectionsAccountsAccountSubscribeRequestSchema: TypedSchema<PostFinancialConnectionsAccountsAccountSubscribeRequest> = typed<PostFinancialConnectionsAccountsAccountSubscribeRequest>(object({
  expand: optional(array(string())),
  features: array(string()),
}));