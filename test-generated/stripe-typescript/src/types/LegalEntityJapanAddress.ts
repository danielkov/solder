import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * LegalEntityJapanAddress
 *
 * 
 */
export interface LegalEntityJapanAddress {
  /**
   * City/Ward.
   */
  city?: string;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country?: string;
  /**
   * Block/Building number.
   */
  line1?: string;
  /**
   * Building details.
   */
  line2?: string;
  /**
   * ZIP or postal code.
   */
  postalCode?: string;
  /**
   * Prefecture.
   */
  state?: string;
  /**
   * Town/cho-me.
   */
  town?: string;
}

export const LegalEntityJapanAddressSchema: TypedSchema<LegalEntityJapanAddress> = typed<LegalEntityJapanAddress>(object({
  city: optional(string()),
  country: optional(string()),
  line1: optional(string()),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
  town: optional(string()),
}));