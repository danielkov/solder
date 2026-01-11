import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountSessionsRequestFeatures2 } from './PostAccountSessionsRequestFeatures2';
import { PostAccountSessionsRequestFeatures2Schema } from './PostAccountSessionsRequestFeatures2';
/**
 * disputes_list_config_param
 */
export interface PostAccountSessionsRequestDisputesList {
  enabled: boolean;
  /**
   * disputes_list_features_param
   */
  features?: PostAccountSessionsRequestFeatures2;
}

export const PostAccountSessionsRequestDisputesListSchema: TypedSchema<PostAccountSessionsRequestDisputesList> = typed<PostAccountSessionsRequestDisputesList>(object({
  enabled: boolean(),
  get features() { return optional(PostAccountSessionsRequestFeatures2Schema) },
}));