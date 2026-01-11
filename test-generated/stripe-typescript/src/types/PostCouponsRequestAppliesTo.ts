import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * applies_to_params
 *
 * A hash containing directions for what this Coupon will apply discounts to.
 */
export interface PostCouponsRequestAppliesTo {
  products?: Array<string>;
}

export const PostCouponsRequestAppliesToSchema: TypedSchema<PostCouponsRequestAppliesTo> = typed<PostCouponsRequestAppliesTo>(object({
  products: optional(array(string())),
}));