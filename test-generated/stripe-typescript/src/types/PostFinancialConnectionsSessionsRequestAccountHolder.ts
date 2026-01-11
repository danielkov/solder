import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * accountholder_params
 *
 * The account holder to link accounts for.
 */
export interface PostFinancialConnectionsSessionsRequestAccountHolder {
  account?: string;
  customer?: string;
  type: string;
}

export const PostFinancialConnectionsSessionsRequestAccountHolderSchema: TypedSchema<PostFinancialConnectionsSessionsRequestAccountHolder> = typed<PostFinancialConnectionsSessionsRequestAccountHolder>(object({
  account: optional(string()),
  customer: optional(string()),
  type: string(),
}));