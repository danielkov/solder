import { TypedSchema, array, object, optional, typed } from '@speakeasy-api/tonic';

import type { GetBookingsUnionUnion } from './GetBookingsUnionUnion';
import { GetBookingsUnionUnionSchema } from './GetBookingsUnionUnion';
import type { Station } from './Station';
import { StationSchema } from './Station';
export interface GetStationsUnion {
  /**
   * The wrapper for a collection is an array of objects.
   */
  data?: Array<Station>;
  /**
   * A set of hypermedia links which serve as controls for the client.
   */
  links?: GetBookingsUnionUnion;
}

export const GetStationsUnionSchema: TypedSchema<GetStationsUnion> = typed<GetStationsUnion>(object({
  get data() { return optional(array(StationSchema)) },
  get links() { return optional(GetBookingsUnionUnionSchema) },
}));