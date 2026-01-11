import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductResourceJurisdiction
 *
 * 
 */
export interface TaxProductResourceJurisdiction {
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country: string;
  /**
   * A human-readable name for the jurisdiction imposing the tax.
   */
  displayName: string;
  /**
   * Indicates the level of the jurisdiction imposing the tax.
   */
  level: string;
  /**
   * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. For example, "NY" for New York, United States.
   */
  state?: string;
}

export const TaxProductResourceJurisdictionSchema: TypedSchema<TaxProductResourceJurisdiction> = typed<TaxProductResourceJurisdiction>(object({
  country: string(),
  displayName: string(),
  level: string(),
  state: optional(string()),
}));