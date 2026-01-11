import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostFinancialConnectionsAccountsAccountUnsubscribeRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The list of account features from which you would like to unsubscribe.
   */
  features: Array<string>;
}

export const PostFinancialConnectionsAccountsAccountUnsubscribeRequestSchema: TypedSchema<PostFinancialConnectionsAccountsAccountUnsubscribeRequest> = typed<PostFinancialConnectionsAccountsAccountUnsubscribeRequest>(object({
  expand: optional(array(string())),
  features: array(string()),
}));