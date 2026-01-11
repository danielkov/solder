import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountSessionsRequestFeatures5 } from './PostAccountSessionsRequestFeatures5';
import { PostAccountSessionsRequestFeatures5Schema } from './PostAccountSessionsRequestFeatures5';
/**
 * instant_payouts_promotion_config_param
 */
export interface PostAccountSessionsRequestInstantPayoutsPromotion {
  enabled: boolean;
  /**
   * instant_payouts_promotion_features_param
   */
  features?: PostAccountSessionsRequestFeatures5;
}

export const PostAccountSessionsRequestInstantPayoutsPromotionSchema: TypedSchema<PostAccountSessionsRequestInstantPayoutsPromotion> = typed<PostAccountSessionsRequestInstantPayoutsPromotion>(object({
  enabled: boolean(),
  get features() { return optional(PostAccountSessionsRequestFeatures5Schema) },
}));