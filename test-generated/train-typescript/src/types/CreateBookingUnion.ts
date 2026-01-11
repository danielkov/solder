import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { LinksSelf } from './LinksSelf';
import { LinksSelfSchema } from './LinksSelf';
export interface CreateBookingUnion {
  /**
   * Indicates whether the passenger has a bicycle.
   */
  hasBicycle?: boolean;
  /**
   * Indicates whether the passenger has a dog.
   */
  hasDog?: boolean;
  /**
   * Unique identifier for the booking
   */
  id?: string;
  /**
   * The link to the current resource.
   */
  links?: LinksSelf;
  /**
   * Name of the passenger
   */
  passengerName?: string;
  /**
   * Identifier of the booked trip
   */
  tripId?: string;
}

export const CreateBookingUnionSchema: TypedSchema<CreateBookingUnion> = typed<CreateBookingUnion>(object({
  hasBicycle: optional(boolean()),
  hasDog: optional(boolean()),
  id: optional(string()),
  get links() { return optional(LinksSelfSchema) },
  passengerName: optional(string()),
  tripId: optional(string()),
}));