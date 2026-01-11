import { TypedSchema, array, object, optional, typed } from '@speakeasy-api/tonic';

import type { GetBookingsUnionUnion } from './GetBookingsUnionUnion';
import { GetBookingsUnionUnionSchema } from './GetBookingsUnionUnion';
import type { GetTripsUnionUnion } from './GetTripsUnionUnion';
import { GetTripsUnionUnionSchema } from './GetTripsUnionUnion';
export interface GetTripsUnion {
  /**
   * The wrapper for a collection is an array of objects.
   */
  data?: Array<GetTripsUnionUnion>;
  /**
   * A set of hypermedia links which serve as controls for the client.
   */
  links?: GetBookingsUnionUnion;
}

export const GetTripsUnionSchema: TypedSchema<GetTripsUnion> = typed<GetTripsUnion>(object({
  get data() { return optional(array(GetTripsUnionUnionSchema)) },
  get links() { return optional(GetBookingsUnionUnionSchema) },
}));