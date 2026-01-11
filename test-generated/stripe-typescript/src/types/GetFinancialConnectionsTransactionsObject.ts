import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * transaction_refresh_params
 */
export interface GetFinancialConnectionsTransactionsObject {
  after: string;
}

export const GetFinancialConnectionsTransactionsObjectSchema: TypedSchema<GetFinancialConnectionsTransactionsObject> = typed<GetFinancialConnectionsTransactionsObject>(object({
  after: string(),
}));