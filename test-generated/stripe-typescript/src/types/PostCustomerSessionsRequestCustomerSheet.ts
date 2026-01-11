import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCustomerSessionsRequestFeatures } from './PostCustomerSessionsRequestFeatures';
import { PostCustomerSessionsRequestFeaturesSchema } from './PostCustomerSessionsRequestFeatures';
/**
 * customer_sheet_param
 */
export interface PostCustomerSessionsRequestCustomerSheet {
  enabled: boolean;
  /**
   * features_param
   */
  features?: PostCustomerSessionsRequestFeatures;
}

export const PostCustomerSessionsRequestCustomerSheetSchema: TypedSchema<PostCustomerSessionsRequestCustomerSheet> = typed<PostCustomerSessionsRequestCustomerSheet>(object({
  enabled: boolean(),
  get features() { return optional(PostCustomerSessionsRequestFeaturesSchema) },
}));