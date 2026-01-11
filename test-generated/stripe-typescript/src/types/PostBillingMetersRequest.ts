import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingMetersRequestCustomerMapping } from './PostBillingMetersRequestCustomerMapping';
import { PostBillingMetersRequestCustomerMappingSchema } from './PostBillingMetersRequestCustomerMapping';
import type { PostBillingMetersRequestDefaultAggregation } from './PostBillingMetersRequestDefaultAggregation';
import { PostBillingMetersRequestDefaultAggregationSchema } from './PostBillingMetersRequestDefaultAggregation';
import type { PostBillingMetersRequestValueSettings } from './PostBillingMetersRequestValueSettings';
import { PostBillingMetersRequestValueSettingsSchema } from './PostBillingMetersRequestValueSettings';
export interface PostBillingMetersRequest {
  /**
   * customer_mapping_param
   *
   * Fields that specify how to map a meter event to a customer.
   */
  customerMapping?: PostBillingMetersRequestCustomerMapping;
  /**
   * aggregation_settings_param
   *
   * The default settings to aggregate a meter's events with.
   */
  defaultAggregation: PostBillingMetersRequestDefaultAggregation;
  /**
   * The meter’s name. Not visible to the customer.
   */
  displayName: string;
  /**
   * The name of the meter event to record usage for. Corresponds with the `event_name` field on meter events.
   */
  eventName: string;
  /**
   * The time window which meter events have been pre-aggregated for, if any.
   */
  eventTimeWindow?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * meter_value_settings_param
   *
   * Fields that specify how to calculate a meter event's value.
   */
  valueSettings?: PostBillingMetersRequestValueSettings;
}

export const PostBillingMetersRequestSchema: TypedSchema<PostBillingMetersRequest> = typed<PostBillingMetersRequest>(object({
  get customerMapping() { return optional(PostBillingMetersRequestCustomerMappingSchema) },
  defaultAggregation: PostBillingMetersRequestDefaultAggregationSchema,
  displayName: string(),
  eventName: string(),
  eventTimeWindow: optional(string()),
  expand: optional(array(string())),
  get valueSettings() { return optional(PostBillingMetersRequestValueSettingsSchema) },
}));