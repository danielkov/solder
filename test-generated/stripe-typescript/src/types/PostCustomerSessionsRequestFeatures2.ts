import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * features_param
 */
export interface PostCustomerSessionsRequestFeatures2 {
  paymentMethodAllowRedisplayFilters?: Array<string>;
  paymentMethodRedisplay?: string;
  paymentMethodRedisplayLimit?: number;
  paymentMethodRemove?: string;
  paymentMethodSave?: string;
  paymentMethodSaveUsage?: string;
}

export const PostCustomerSessionsRequestFeatures2Schema: TypedSchema<PostCustomerSessionsRequestFeatures2> = typed<PostCustomerSessionsRequestFeatures2>(object({
  paymentMethodAllowRedisplayFilters: optional(array(string())),
  paymentMethodRedisplay: optional(string()),
  paymentMethodRedisplayLimit: optional(number()),
  paymentMethodRemove: optional(string()),
  paymentMethodSave: optional(string()),
  paymentMethodSaveUsage: optional(string()),
}));