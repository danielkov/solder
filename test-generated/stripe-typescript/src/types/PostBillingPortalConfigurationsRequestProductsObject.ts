import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsRequestProductsObjectAdjustableQuantity } from './PostBillingPortalConfigurationsRequestProductsObjectAdjustableQuantity';
import { PostBillingPortalConfigurationsRequestProductsObjectAdjustableQuantitySchema } from './PostBillingPortalConfigurationsRequestProductsObjectAdjustableQuantity';
/**
 * subscription_update_product_param
 */
export interface PostBillingPortalConfigurationsRequestProductsObject {
  /**
   * subscription_update_product_adjustable_quantity_param
   */
  adjustableQuantity?: PostBillingPortalConfigurationsRequestProductsObjectAdjustableQuantity;
  prices: Array<string>;
  product: string;
}

export const PostBillingPortalConfigurationsRequestProductsObjectSchema: TypedSchema<PostBillingPortalConfigurationsRequestProductsObject> = typed<PostBillingPortalConfigurationsRequestProductsObject>(object({
  get adjustableQuantity() { return optional(PostBillingPortalConfigurationsRequestProductsObjectAdjustableQuantitySchema) },
  prices: array(string()),
  product: string(),
}));