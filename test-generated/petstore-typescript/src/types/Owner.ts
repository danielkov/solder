import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
export interface Owner {
  address?: Address;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  phone?: string;
}

export const OwnerSchema: TypedSchema<Owner> = typed<Owner>(object({
  get address() { return optional(AddressSchema) },
  email: string(),
  firstName: string(),
  id: string(),
  lastName: string(),
  phone: optional(string()),
}));