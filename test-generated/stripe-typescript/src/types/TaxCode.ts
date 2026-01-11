import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductResourceTaxCode
 *
 * [Tax codes](https://stripe.com/docs/tax/tax-categories) classify goods and services for tax purposes.
 */
export interface TaxCode {
  /**
   * A detailed description of which types of products the tax code represents.
   */
  description: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * A short name for the tax code.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
}

export const TaxCodeSchema: TypedSchema<TaxCode> = typed<TaxCode>(object({
  description: string(),
  id: string(),
  name: string(),
  object: string(),
}));