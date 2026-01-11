import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { PromotionCodesResourcePromotion } from './PromotionCodesResourcePromotion';
import { PromotionCodesResourcePromotionSchema } from './PromotionCodesResourcePromotion';
import type { PromotionCodesResourceRestrictions } from './PromotionCodesResourceRestrictions';
import { PromotionCodesResourceRestrictionsSchema } from './PromotionCodesResourceRestrictions';
/**
 * PromotionCode
 *
 * A Promotion Code represents a customer-redeemable code for an underlying promotion.
You can create multiple codes for a single promotion.

If you enable promotion codes in your [customer portal configuration](https://stripe.com/docs/customer-management/configure-portal), then customers can redeem a code themselves when updating a subscription in the portal.
Customers can also view the currently active promotion codes and coupons on each of their subscriptions in the portal.
 */
export interface PromotionCode {
  /**
   * Whether the promotion code is currently active. A promotion code is only active if the coupon is also valid.
   */
  active: boolean;
  /**
   * The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for each customer. Valid characters are lower case letters (a-z), upper case letters (A-Z), and digits (0-9).
   */
  code: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The customer that this promotion code can be used by.
   */
  customer?: CustomerUnion;
  /**
   * Date at which the promotion code can no longer be redeemed.
   */
  expiresAt?: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Maximum number of times this promotion code can be redeemed.
   */
  maxRedemptions?: number;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * PromotionCodesResourcePromotion
   *
   * 
   */
  promotion: PromotionCodesResourcePromotion;
  /**
   * PromotionCodesResourceRestrictions
   *
   * 
   */
  restrictions: PromotionCodesResourceRestrictions;
  /**
   * Number of times this promotion code has been used.
   */
  timesRedeemed: number;
}

export const PromotionCodeSchema: TypedSchema<PromotionCode> = typed<PromotionCode>(object({
  active: boolean(),
  code: string(),
  created: number(),
  get customer() { return optional(CustomerUnionSchema) },
  expiresAt: optional(number()),
  id: string(),
  livemode: boolean(),
  maxRedemptions: optional(number()),
  get metadata() { return optional(MetadataPropertySchema) },
  object: string(),
  promotion: PromotionCodesResourcePromotionSchema,
  restrictions: PromotionCodesResourceRestrictionsSchema,
  timesRedeemed: number(),
}));