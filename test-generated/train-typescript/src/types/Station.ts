import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * A train station.
 */
export interface Station {
  /**
   * The address of the station.
   */
  address: string;
  /**
   * The country code of the station.
   */
  countryCode: string;
  /**
   * Unique identifier for the station.
   */
  id: string;
  /**
   * The name of the station
   */
  name: string;
  /**
   * The timezone of the station in the [IANA Time Zone Database format](https://www.iana.org/time-zones).
   */
  timezone?: string;
}

export const StationSchema: TypedSchema<Station> = typed<Station>(object({
  address: string(),
  countryCode: string(),
  id: string(),
  name: string(),
  timezone: optional(string()),
}));