import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountSessionsRequestFeatures4 } from './PostAccountSessionsRequestFeatures4';
import { PostAccountSessionsRequestFeatures4Schema } from './PostAccountSessionsRequestFeatures4';
/**
 * financial_account_transactions_config_param
 */
export interface PostAccountSessionsRequestFinancialAccountTransactions {
  enabled: boolean;
  /**
   * financial_account_transactions_features_param
   */
  features?: PostAccountSessionsRequestFeatures4;
}

export const PostAccountSessionsRequestFinancialAccountTransactionsSchema: TypedSchema<PostAccountSessionsRequestFinancialAccountTransactions> = typed<PostAccountSessionsRequestFinancialAccountTransactions>(object({
  enabled: boolean(),
  get features() { return optional(PostAccountSessionsRequestFeatures4Schema) },
}));