import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CustomerTaxLocation } from './CustomerTaxLocation';
import { CustomerTaxLocationSchema } from './CustomerTaxLocation';
/**
 * CustomerTax
 *
 * 
 */
export interface CustomerTax {
  /**
   * Surfaces if automatic tax computation is possible given the current customer location information.
   */
  automaticTax: string;
  /**
   * A recent IP address of the customer used for tax reporting and tax location inference.
   */
  ipAddress?: string;
  /**
   * The identified tax location of the customer.
   */
  location?: CustomerTaxLocation;
  /**
   * The tax calculation provider used for location resolution. Defaults to `stripe` when not using a [third-party provider](/tax/third-party-apps).
   */
  provider: string;
}

export const CustomerTaxSchema: TypedSchema<CustomerTax> = typed<CustomerTax>(object({
  automaticTax: string(),
  ipAddress: optional(string()),
  get location() { return optional(CustomerTaxLocationSchema) },
  provider: string(),
}));