import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductResourceTaxSettingsDefaults
 *
 * 
 */
export interface TaxProductResourceTaxSettingsDefaults {
  /**
   * The tax calculation provider this account uses. Defaults to `stripe` when not using a [third-party provider](/tax/third-party-apps).
   */
  provider: string;
  /**
   * Default [tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#tax-behavior) used to specify whether the price is considered inclusive of taxes or exclusive of taxes. If the item's price has a tax behavior set, it will take precedence over the default tax behavior.
   */
  taxBehavior?: string;
  /**
   * Default [tax code](https://stripe.com/docs/tax/tax-categories) used to classify your products and prices.
   */
  taxCode?: string;
}

export const TaxProductResourceTaxSettingsDefaultsSchema: TypedSchema<TaxProductResourceTaxSettingsDefaults> = typed<TaxProductResourceTaxSettingsDefaults>(object({
  provider: string(),
  taxBehavior: optional(string()),
  taxCode: optional(string()),
}));