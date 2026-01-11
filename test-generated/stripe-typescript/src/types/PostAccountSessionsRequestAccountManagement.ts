import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountSessionsRequestFeatures } from './PostAccountSessionsRequestFeatures';
import { PostAccountSessionsRequestFeaturesSchema } from './PostAccountSessionsRequestFeatures';
/**
 * account_config_param
 */
export interface PostAccountSessionsRequestAccountManagement {
  enabled: boolean;
  /**
   * account_features_param
   */
  features?: PostAccountSessionsRequestFeatures;
}

export const PostAccountSessionsRequestAccountManagementSchema: TypedSchema<PostAccountSessionsRequestAccountManagement> = typed<PostAccountSessionsRequestAccountManagement>(object({
  enabled: boolean(),
  get features() { return optional(PostAccountSessionsRequestFeaturesSchema) },
}));