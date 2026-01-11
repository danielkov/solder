import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * GelatoDataVerifiedOutputsDate
 *
 * Point in Time
 */
export interface GelatoDataVerifiedOutputsDate {
  /**
   * Numerical day between 1 and 31.
   */
  day?: number;
  /**
   * Numerical month between 1 and 12.
   */
  month?: number;
  /**
   * The four-digit year.
   */
  year?: number;
}

export const GelatoDataVerifiedOutputsDateSchema: TypedSchema<GelatoDataVerifiedOutputsDate> = typed<GelatoDataVerifiedOutputsDate>(object({
  day: optional(number()),
  month: optional(number()),
  year: optional(number()),
}));