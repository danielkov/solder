import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * A physical address
 */
export interface Address {
  /**
   * City name
   */
  city: string;
  /**
   * Country code (ISO 3166-1 alpha-2)
   */
  country: string;
  /**
   * Postal or ZIP code
   */
  postalCode: string;
  /**
   * State or province
   */
  state?: string;
  /**
   * Street address
   */
  street: string;
}

export const AddressSchema: TypedSchema<Address> = typed<Address>(object({
  city: string(),
  country: string(),
  postalCode: string(),
  state: optional(string()),
  street: string(),
}));