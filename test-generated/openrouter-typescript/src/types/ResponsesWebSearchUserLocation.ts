import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * User location information for web search
 */
export interface ResponsesWebSearchUserLocation {
  city?: string;
  country?: string;
  region?: string;
  timezone?: string;
  type?: string;
}

export const ResponsesWebSearchUserLocationSchema: TypedSchema<ResponsesWebSearchUserLocation> = typed<ResponsesWebSearchUserLocation>(object({
  city: optional(string()),
  country: optional(string()),
  region: optional(string()),
  timezone: optional(string()),
  type: optional(string()),
}));