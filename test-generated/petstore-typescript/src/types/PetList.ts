import { TypedSchema, array, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { Pet } from './Pet';
import { PetSchema } from './Pet';
export interface PetList {
  items: Array<Pet>;
  limit?: number;
  offset?: number;
  /**
   * Total number of pets matching the query
   */
  total: number;
}

export const PetListSchema: TypedSchema<PetList> = typed<PetList>(object({
  items: array(PetSchema),
  limit: optional(number()),
  offset: optional(number()),
  total: number(),
}));