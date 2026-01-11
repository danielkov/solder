import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * aggregation_settings_param
 *
 * The default settings to aggregate a meter's events with.
 */
export interface PostBillingMetersRequestDefaultAggregation {
  formula: string;
}

export const PostBillingMetersRequestDefaultAggregationSchema: TypedSchema<PostBillingMetersRequestDefaultAggregation> = typed<PostBillingMetersRequestDefaultAggregation>(object({
  formula: string(),
}));