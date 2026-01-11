import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PetStatus } from './PetStatus';
import { PetStatusSchema } from './PetStatus';
export interface UpdatePet {
  age?: number;
  breed?: string;
  name?: string;
  /**
   * Current status of the pet
   */
  status?: PetStatus;
  tags?: Array<string>;
  weight?: number;
}

export const UpdatePetSchema: TypedSchema<UpdatePet> = typed<UpdatePet>(object({
  age: optional(number()),
  breed: optional(string()),
  name: optional(string()),
  get status() { return optional(PetStatusSchema) },
  tags: optional(array(string())),
  weight: optional(number()),
}));