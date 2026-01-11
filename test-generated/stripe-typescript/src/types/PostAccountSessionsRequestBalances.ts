import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountSessionsRequestFeatures } from './DefaultPostAccountSessionsRequestFeatures';
import { DefaultPostAccountSessionsRequestFeaturesSchema } from './DefaultPostAccountSessionsRequestFeatures';
/**
 * payouts_config_param
 */
export interface PostAccountSessionsRequestBalances {
  enabled: boolean;
  /**
   * payouts_features_param
   */
  features?: DefaultPostAccountSessionsRequestFeatures;
}

export const PostAccountSessionsRequestBalancesSchema: TypedSchema<PostAccountSessionsRequestBalances> = typed<PostAccountSessionsRequestBalances>(object({
  enabled: boolean(),
  get features() { return optional(DefaultPostAccountSessionsRequestFeaturesSchema) },
}));