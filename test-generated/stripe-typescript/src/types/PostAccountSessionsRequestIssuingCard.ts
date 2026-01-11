import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountSessionsRequestFeatures6 } from './PostAccountSessionsRequestFeatures6';
import { PostAccountSessionsRequestFeatures6Schema } from './PostAccountSessionsRequestFeatures6';
/**
 * issuing_card_config_param
 */
export interface PostAccountSessionsRequestIssuingCard {
  enabled: boolean;
  /**
   * issuing_card_features_param
   */
  features?: PostAccountSessionsRequestFeatures6;
}

export const PostAccountSessionsRequestIssuingCardSchema: TypedSchema<PostAccountSessionsRequestIssuingCard> = typed<PostAccountSessionsRequestIssuingCard>(object({
  enabled: boolean(),
  get features() { return optional(PostAccountSessionsRequestFeatures6Schema) },
}));