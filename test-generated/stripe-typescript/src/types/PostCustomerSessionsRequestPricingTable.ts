import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * pricing_table_param
 */
export interface PostCustomerSessionsRequestPricingTable {
  enabled: boolean;
}

export const PostCustomerSessionsRequestPricingTableSchema: TypedSchema<PostCustomerSessionsRequestPricingTable> = typed<PostCustomerSessionsRequestPricingTable>(object({
  enabled: boolean(),
}));