import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Species } from './Species';
import { SpeciesSchema } from './Species';
export interface NewPet {
  age?: number;
  breed?: string;
  name: string;
  photoUrls?: Array<string>;
  /**
   * Species of the pet
   */
  species: Species;
  tags?: Array<string>;
  weight?: number;
}

export const NewPetSchema: TypedSchema<NewPet> = typed<NewPet>(object({
  age: optional(number()),
  breed: optional(string()),
  name: string(),
  photoUrls: optional(array(string())),
  species: SpeciesSchema,
  tags: optional(array(string())),
  weight: optional(number()),
}));