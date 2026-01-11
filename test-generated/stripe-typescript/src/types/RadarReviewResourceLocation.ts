import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * RadarReviewResourceLocation
 *
 * 
 */
export interface RadarReviewResourceLocation {
  /**
   * The city where the payment originated.
   */
  city?: string;
  /**
   * Two-letter ISO code representing the country where the payment originated.
   */
  country?: string;
  /**
   * The geographic latitude where the payment originated.
   */
  latitude?: number;
  /**
   * The geographic longitude where the payment originated.
   */
  longitude?: number;
  /**
   * The state/county/province/region where the payment originated.
   */
  region?: string;
}

export const RadarReviewResourceLocationSchema: TypedSchema<RadarReviewResourceLocation> = typed<RadarReviewResourceLocation>(object({
  city: optional(string()),
  country: optional(string()),
  latitude: optional(number()),
  longitude: optional(number()),
  region: optional(string()),
}));