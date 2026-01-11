import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * shipping_cost
 *
 * Shipping cost details to be used for the calculation.
 */
export interface PostTaxCalculationsRequestShippingCost {
  amount?: number;
  shippingRate?: string;
  taxBehavior?: string;
  taxCode?: string;
}

export const PostTaxCalculationsRequestShippingCostSchema: TypedSchema<PostTaxCalculationsRequestShippingCost> = typed<PostTaxCalculationsRequestShippingCost>(object({
  amount: optional(number()),
  shippingRate: optional(string()),
  taxBehavior: optional(string()),
  taxCode: optional(string()),
}));