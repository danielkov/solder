import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * linked_account_options_param
 */
export interface PostCheckoutSessionsRequestFinancialConnections {
  permissions?: Array<string>;
  prefetch?: Array<string>;
}

export const PostCheckoutSessionsRequestFinancialConnectionsSchema: TypedSchema<PostCheckoutSessionsRequestFinancialConnections> = typed<PostCheckoutSessionsRequestFinancialConnections>(object({
  permissions: optional(array(string())),
  prefetch: optional(array(string())),
}));