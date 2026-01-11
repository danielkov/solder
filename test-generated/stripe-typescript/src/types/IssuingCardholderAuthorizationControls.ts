import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingCardholderSpendingLimit } from './IssuingCardholderSpendingLimit';
import { IssuingCardholderSpendingLimitSchema } from './IssuingCardholderSpendingLimit';
/**
 * IssuingCardholderAuthorizationControls
 *
 * 
 */
export interface IssuingCardholderAuthorizationControls {
  /**
   * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to allow. All other categories will be blocked. Cannot be set with `blocked_categories`.
   */
  allowedCategories?: Array<string>;
  /**
   * Array of strings containing representing countries from which authorizations will be allowed. Authorizations from merchants in all other countries will be declined. Country codes should be ISO 3166 alpha-2 country codes (e.g. `US`). Cannot be set with `blocked_merchant_countries`. Provide an empty value to unset this control.
   */
  allowedMerchantCountries?: Array<string>;
  /**
   * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to decline. All other categories will be allowed. Cannot be set with `allowed_categories`.
   */
  blockedCategories?: Array<string>;
  /**
   * Array of strings containing representing countries from which authorizations will be declined. Country codes should be ISO 3166 alpha-2 country codes (e.g. `US`). Cannot be set with `allowed_merchant_countries`. Provide an empty value to unset this control.
   */
  blockedMerchantCountries?: Array<string>;
  /**
   * Limit spending with amount-based rules that apply across this cardholder's cards.
   */
  spendingLimits?: Array<IssuingCardholderSpendingLimit>;
  /**
   * Currency of the amounts within `spending_limits`.
   */
  spendingLimitsCurrency?: string;
}

export const IssuingCardholderAuthorizationControlsSchema: TypedSchema<IssuingCardholderAuthorizationControls> = typed<IssuingCardholderAuthorizationControls>(object({
  allowedCategories: optional(array(string())),
  allowedMerchantCountries: optional(array(string())),
  blockedCategories: optional(array(string())),
  blockedMerchantCountries: optional(array(string())),
  get spendingLimits() { return optional(array(IssuingCardholderSpendingLimitSchema)) },
  spendingLimitsCurrency: optional(string()),
}));