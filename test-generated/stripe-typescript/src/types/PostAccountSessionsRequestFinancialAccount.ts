import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountSessionsRequestFeatures3 } from './PostAccountSessionsRequestFeatures3';
import { PostAccountSessionsRequestFeatures3Schema } from './PostAccountSessionsRequestFeatures3';
/**
 * financial_account_config_param
 */
export interface PostAccountSessionsRequestFinancialAccount {
  enabled: boolean;
  /**
   * financial_account_features_param
   */
  features?: PostAccountSessionsRequestFeatures3;
}

export const PostAccountSessionsRequestFinancialAccountSchema: TypedSchema<PostAccountSessionsRequestFinancialAccount> = typed<PostAccountSessionsRequestFinancialAccount>(object({
  enabled: boolean(),
  get features() { return optional(PostAccountSessionsRequestFeatures3Schema) },
}));