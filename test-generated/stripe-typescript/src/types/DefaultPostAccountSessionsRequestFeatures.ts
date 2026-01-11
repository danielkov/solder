import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * payouts_features_param
 */
export interface DefaultPostAccountSessionsRequestFeatures {
  disableStripeUserAuthentication?: boolean;
  editPayoutSchedule?: boolean;
  externalAccountCollection?: boolean;
  instantPayouts?: boolean;
  standardPayouts?: boolean;
}

export const DefaultPostAccountSessionsRequestFeaturesSchema: TypedSchema<DefaultPostAccountSessionsRequestFeatures> = typed<DefaultPostAccountSessionsRequestFeatures>(object({
  disableStripeUserAuthentication: optional(boolean()),
  editPayoutSchedule: optional(boolean()),
  externalAccountCollection: optional(boolean()),
  instantPayouts: optional(boolean()),
  standardPayouts: optional(boolean()),
}));