import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * subscription_update_product_adjustable_quantity_param
 */
export interface PostBillingPortalConfigurationsRequestProductsObjectAdjustableQuantity {
  enabled: boolean;
  maximum?: number;
  minimum?: number;
}

export const PostBillingPortalConfigurationsRequestProductsObjectAdjustableQuantitySchema: TypedSchema<PostBillingPortalConfigurationsRequestProductsObjectAdjustableQuantity> = typed<PostBillingPortalConfigurationsRequestProductsObjectAdjustableQuantity>(object({
  enabled: boolean(),
  maximum: optional(number()),
  minimum: optional(number()),
}));