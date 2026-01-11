import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountSessionsRequestFeatures8 } from './PostAccountSessionsRequestFeatures8';
import { PostAccountSessionsRequestFeatures8Schema } from './PostAccountSessionsRequestFeatures8';
/**
 * payment_disputes_config_param
 */
export interface PostAccountSessionsRequestPaymentDisputes {
  enabled: boolean;
  /**
   * payment_disputes_features_param
   */
  features?: PostAccountSessionsRequestFeatures8;
}

export const PostAccountSessionsRequestPaymentDisputesSchema: TypedSchema<PostAccountSessionsRequestPaymentDisputes> = typed<PostAccountSessionsRequestPaymentDisputes>(object({
  enabled: boolean(),
  get features() { return optional(PostAccountSessionsRequestFeatures8Schema) },
}));