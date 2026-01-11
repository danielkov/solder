import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * The link to the origin station resource.
 */
export interface LinksOrigin {
  self?: string;
}

export const LinksOriginSchema: TypedSchema<LinksOrigin> = typed<LinksOrigin>(object({
  self: optional(string()),
}));