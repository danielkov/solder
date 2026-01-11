import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CustomerTaxLocation
 *
 * 
 */
export interface CustomerTaxLocation {
  /**
   * The identified tax country of the customer.
   */
  country: string;
  /**
   * The data source used to infer the customer's location.
   */
  source: string;
  /**
   * The identified tax state, county, province, or region of the customer.
   */
  state?: string;
}

export const CustomerTaxLocationSchema: TypedSchema<CustomerTaxLocation> = typed<CustomerTaxLocation>(object({
  country: string(),
  source: string(),
  state: optional(string()),
}));