import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * features_param
 */
export interface PostCustomerSessionsRequestFeatures {
  paymentMethodAllowRedisplayFilters?: Array<string>;
  paymentMethodRemove?: string;
}

export const PostCustomerSessionsRequestFeaturesSchema: TypedSchema<PostCustomerSessionsRequestFeatures> = typed<PostCustomerSessionsRequestFeatures>(object({
  paymentMethodAllowRedisplayFilters: optional(array(string())),
  paymentMethodRemove: optional(string()),
}));