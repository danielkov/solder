import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
export interface UrlCitation {
  endIndex: number;
  startIndex: number;
  title: string;
  type: string;
  url: string;
}

export const UrlCitationSchema: TypedSchema<UrlCitation> = typed<UrlCitation>(object({
  endIndex: number(),
  startIndex: number(),
  title: string(),
  type: string(),
  url: string(),
}));