import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TaxProductResourceCustomerDetailsResourceTaxId } from './TaxProductResourceCustomerDetailsResourceTaxId';
import { TaxProductResourceCustomerDetailsResourceTaxIdSchema } from './TaxProductResourceCustomerDetailsResourceTaxId';
import type { TaxProductResourcePostalAddress } from './TaxProductResourcePostalAddress';
import { TaxProductResourcePostalAddressSchema } from './TaxProductResourcePostalAddress';
/**
 * TaxProductResourceCustomerDetails
 *
 * 
 */
export interface TaxProductResourceCustomerDetails {
  /**
   * The customer's postal address (for example, home or business location).
   */
  address?: TaxProductResourcePostalAddress;
  /**
   * The type of customer address provided.
   */
  addressSource?: string;
  /**
   * The customer's IP address (IPv4 or IPv6).
   */
  ipAddress?: string;
  /**
   * The customer's tax IDs (for example, EU VAT numbers).
   */
  taxIds: Array<TaxProductResourceCustomerDetailsResourceTaxId>;
  /**
   * The taxability override used for taxation.
   */
  taxabilityOverride: string;
}

export const TaxProductResourceCustomerDetailsSchema: TypedSchema<TaxProductResourceCustomerDetails> = typed<TaxProductResourceCustomerDetails>(object({
  get address() { return optional(TaxProductResourcePostalAddressSchema) },
  addressSource: optional(string()),
  ipAddress: optional(string()),
  taxIds: array(TaxProductResourceCustomerDetailsResourceTaxIdSchema),
  taxabilityOverride: string(),
}));