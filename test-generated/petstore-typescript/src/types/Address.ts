import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface Address {
  city: string;
  country: string;
  postalCode?: string;
  state?: string;
  street: string;
}

export const AddressSchema: TypedSchema<Address> = typed<Address>(object({
  city: string(),
  country: string(),
  postalCode: optional(string()),
  state: optional(string()),
  street: string(),
}));