import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * features_param
 */
export interface DefaultPostCustomerSessionsRequestFeatures {
  paymentMethodAllowRedisplayFilters?: Array<string>;
  paymentMethodRedisplay?: string;
  paymentMethodRemove?: string;
  paymentMethodSave?: string;
  paymentMethodSaveAllowRedisplayOverride?: string;
}

export const DefaultPostCustomerSessionsRequestFeaturesSchema: TypedSchema<DefaultPostCustomerSessionsRequestFeatures> = typed<DefaultPostCustomerSessionsRequestFeatures>(object({
  paymentMethodAllowRedisplayFilters: optional(array(string())),
  paymentMethodRedisplay: optional(string()),
  paymentMethodRemove: optional(string()),
  paymentMethodSave: optional(string()),
  paymentMethodSaveAllowRedisplayOverride: optional(string()),
}));