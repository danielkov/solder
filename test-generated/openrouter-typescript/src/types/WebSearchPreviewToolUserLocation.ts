import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface WebSearchPreviewToolUserLocation {
  city?: string;
  country?: string;
  region?: string;
  timezone?: string;
  type: string;
}

export const WebSearchPreviewToolUserLocationSchema: TypedSchema<WebSearchPreviewToolUserLocation> = typed<WebSearchPreviewToolUserLocation>(object({
  city: optional(string()),
  country: optional(string()),
  region: optional(string()),
  timezone: optional(string()),
  type: string(),
}));