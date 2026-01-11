import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountSessionsRequestFeatures2 } from './PostAccountSessionsRequestFeatures2';
import { PostAccountSessionsRequestFeatures2Schema } from './PostAccountSessionsRequestFeatures2';
/**
 * payments_config_param
 */
export interface PostAccountSessionsRequestPaymentDetails {
  enabled: boolean;
  /**
   * payments_features_param
   */
  features?: PostAccountSessionsRequestFeatures2;
}

export const PostAccountSessionsRequestPaymentDetailsSchema: TypedSchema<PostAccountSessionsRequestPaymentDetails> = typed<PostAccountSessionsRequestPaymentDetails>(object({
  enabled: boolean(),
  get features() { return optional(PostAccountSessionsRequestFeatures2Schema) },
}));