import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
export interface NewOwner {
  address?: Address;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export const NewOwnerSchema: TypedSchema<NewOwner> = typed<NewOwner>(object({
  get address() { return optional(AddressSchema) },
  email: string(),
  firstName: string(),
  lastName: string(),
  phone: optional(string()),
}));