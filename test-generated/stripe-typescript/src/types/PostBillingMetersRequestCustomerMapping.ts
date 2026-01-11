import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * customer_mapping_param
 *
 * Fields that specify how to map a meter event to a customer.
 */
export interface PostBillingMetersRequestCustomerMapping {
  eventPayloadKey: string;
  type: string;
}

export const PostBillingMetersRequestCustomerMappingSchema: TypedSchema<PostBillingMetersRequestCustomerMapping> = typed<PostBillingMetersRequestCustomerMapping>(object({
  eventPayloadKey: string(),
  type: string(),
}));