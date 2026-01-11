import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductResourcePostalAddress
 *
 * 
 */
export interface TaxProductResourcePostalAddress {
  /**
   * City, district, suburb, town, or village.
   */
  city?: string;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country: string;
  /**
   * Address line 1, such as the street, PO Box, or company name.
   */
  line1?: string;
  /**
   * Address line 2, such as the apartment, suite, unit, or building.
   */
  line2?: string;
  /**
   * ZIP or postal code.
   */
  postalCode?: string;
  /**
   * State/province as an [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) subdivision code, without country prefix, such as "NY" or "TX".
   */
  state?: string;
}

export const TaxProductResourcePostalAddressSchema: TypedSchema<TaxProductResourcePostalAddress> = typed<TaxProductResourcePostalAddress>(object({
  city: optional(string()),
  country: string(),
  line1: optional(string()),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
}));