import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostFinancialConnectionsAccountsAccountRefreshRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The list of account features that you would like to refresh.
   */
  features: Array<string>;
}

export const PostFinancialConnectionsAccountsAccountRefreshRequestSchema: TypedSchema<PostFinancialConnectionsAccountsAccountRefreshRequest> = typed<PostFinancialConnectionsAccountsAccountRefreshRequest>(object({
  expand: optional(array(string())),
  features: array(string()),
}));