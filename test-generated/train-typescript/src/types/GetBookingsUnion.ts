import { TypedSchema, array, object, optional, typed } from '@speakeasy-api/tonic';

import type { Booking } from './Booking';
import { BookingSchema } from './Booking';
import type { GetBookingsUnionUnion } from './GetBookingsUnionUnion';
import { GetBookingsUnionUnionSchema } from './GetBookingsUnionUnion';
export interface GetBookingsUnion {
  /**
   * The wrapper for a collection is an array of objects.
   */
  data?: Array<Booking>;
  /**
   * A set of hypermedia links which serve as controls for the client.
   */
  links?: GetBookingsUnionUnion;
}

export const GetBookingsUnionSchema: TypedSchema<GetBookingsUnion> = typed<GetBookingsUnion>(object({
  get data() { return optional(array(BookingSchema)) },
  get links() { return optional(GetBookingsUnionUnionSchema) },
}));