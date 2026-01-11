import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCustomerSessionsRequestFeatures2 } from './PostCustomerSessionsRequestFeatures2';
import { PostCustomerSessionsRequestFeatures2Schema } from './PostCustomerSessionsRequestFeatures2';
/**
 * payment_element_param
 */
export interface PostCustomerSessionsRequestPaymentElement {
  enabled: boolean;
  /**
   * features_param
   */
  features?: PostCustomerSessionsRequestFeatures2;
}

export const PostCustomerSessionsRequestPaymentElementSchema: TypedSchema<PostCustomerSessionsRequestPaymentElement> = typed<PostCustomerSessionsRequestPaymentElement>(object({
  enabled: boolean(),
  get features() { return optional(PostCustomerSessionsRequestFeatures2Schema) },
}));