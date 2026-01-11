import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { DefaultPostCustomerSessionsRequestFeatures } from './DefaultPostCustomerSessionsRequestFeatures';
import { DefaultPostCustomerSessionsRequestFeaturesSchema } from './DefaultPostCustomerSessionsRequestFeatures';
/**
 * mobile_payment_element_param
 */
export interface PostCustomerSessionsRequestMobilePaymentElement {
  enabled: boolean;
  /**
   * features_param
   */
  features?: DefaultPostCustomerSessionsRequestFeatures;
}

export const PostCustomerSessionsRequestMobilePaymentElementSchema: TypedSchema<PostCustomerSessionsRequestMobilePaymentElement> = typed<PostCustomerSessionsRequestMobilePaymentElement>(object({
  enabled: boolean(),
  get features() { return optional(DefaultPostCustomerSessionsRequestFeaturesSchema) },
}));