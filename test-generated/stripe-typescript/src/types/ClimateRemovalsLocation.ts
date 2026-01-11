import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * ClimateRemovalsLocation
 *
 * 
 */
export interface ClimateRemovalsLocation {
  /**
   * The city where the supplier is located.
   */
  city?: string;
  /**
   * Two-letter ISO code representing the country where the supplier is located.
   */
  country: string;
  /**
   * The geographic latitude where the supplier is located.
   */
  latitude?: number;
  /**
   * The geographic longitude where the supplier is located.
   */
  longitude?: number;
  /**
   * The state/county/province/region where the supplier is located.
   */
  region?: string;
}

export const ClimateRemovalsLocationSchema: TypedSchema<ClimateRemovalsLocation> = typed<ClimateRemovalsLocation>(object({
  city: optional(string()),
  country: string(),
  latitude: optional(number()),
  longitude: optional(number()),
  region: optional(string()),
}));