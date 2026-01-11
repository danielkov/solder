import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentsPrimitivesPaymentRecordsResourceAddress
 *
 * A representation of a physical address.
 */
export interface PaymentsPrimitivesPaymentRecordsResourceAddress {
  /**
   * City, district, suburb, town, or village.
   */
  city?: string;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country?: string;
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
   * State, county, province, or region.
   */
  state?: string;
}

export const PaymentsPrimitivesPaymentRecordsResourceAddressSchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourceAddress> = typed<PaymentsPrimitivesPaymentRecordsResourceAddress>(object({
  city: optional(string()),
  country: optional(string()),
  line1: optional(string()),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
}));