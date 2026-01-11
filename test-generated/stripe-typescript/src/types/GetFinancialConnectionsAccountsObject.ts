import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * accountholder_params
 */
export interface GetFinancialConnectionsAccountsObject {
  account?: string;
  customer?: string;
}

export const GetFinancialConnectionsAccountsObjectSchema: TypedSchema<GetFinancialConnectionsAccountsObject> = typed<GetFinancialConnectionsAccountsObject>(object({
  account: optional(string()),
  customer: optional(string()),
}));