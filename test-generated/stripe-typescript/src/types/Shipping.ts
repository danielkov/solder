import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * Shipping
 *
 * 
 */
export interface Shipping {
  /**
   * Address
   *
   * 
   */
  address?: Address;
  /**
   * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
   */
  carrier?: string;
  /**
   * Recipient name.
   */
  name?: string;
  /**
   * Recipient phone (including extension).
   */
  phone?: string;
  /**
   * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
   */
  trackingNumber?: string;
}

export const ShippingSchema: TypedSchema<Shipping> = typed<Shipping>(object({
  get address() { return optional(AddressSchema) },
  carrier: optional(string()),
  name: optional(string()),
  phone: optional(string()),
  trackingNumber: optional(string()),
}));