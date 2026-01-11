import { TypedSchema, array, literal, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Owner } from './Owner';
import { OwnerSchema } from './Owner';
import type { PetStatus } from './PetStatus';
import { PetStatusSchema } from './PetStatus';
import type { Species } from './Species';
import { SpeciesSchema } from './Species';
export interface Pet {
  /**
   * Age of the pet in years
   */
  age?: number;
  /**
   * Breed of the pet
   */
  breed?: string;
  /**
   * When the pet was added to the system
   */
  createdAt?: string;
  /**
   * Unique identifier for the pet
   */
  id: string;
  /**
   * Name of the pet
   */
  name: string;
  owner?: Owner;
  /**
   * URLs of pet photos
   */
  photoUrls?: Array<string>;
  /**
   * Species of the pet
   */
  species: Species;
  /**
   * Current status of the pet
   */
  status: PetStatus;
  /**
   * Tags associated with the pet
   */
  tags?: Array<string>;
  /**
   * Discriminator field - always 'pet' for this type
   */
  type: "pet";
  /**
   * When the pet information was last updated
   */
  updatedAt?: string;
  /**
   * Weight of the pet in kilograms
   */
  weight?: number;
}

export const PetSchema: TypedSchema<Pet> = typed<Pet>(object({
  age: optional(number()),
  breed: optional(string()),
  createdAt: optional(string()),
  id: string(),
  name: string(),
  get owner() { return optional(OwnerSchema) },
  photoUrls: optional(array(string())),
  species: SpeciesSchema,
  status: PetStatusSchema,
  tags: optional(array(string())),
  type: literal("pet"),
  updatedAt: optional(string()),
  weight: optional(number()),
}));