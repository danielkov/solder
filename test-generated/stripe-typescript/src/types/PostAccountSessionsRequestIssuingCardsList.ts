import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountSessionsRequestFeatures7 } from './PostAccountSessionsRequestFeatures7';
import { PostAccountSessionsRequestFeatures7Schema } from './PostAccountSessionsRequestFeatures7';
/**
 * issuing_cards_list_config_param
 */
export interface PostAccountSessionsRequestIssuingCardsList {
  enabled: boolean;
  /**
   * issuing_cards_list_features_param
   */
  features?: PostAccountSessionsRequestFeatures7;
}

export const PostAccountSessionsRequestIssuingCardsListSchema: TypedSchema<PostAccountSessionsRequestIssuingCardsList> = typed<PostAccountSessionsRequestIssuingCardsList>(object({
  enabled: boolean(),
  get features() { return optional(PostAccountSessionsRequestFeatures7Schema) },
}));