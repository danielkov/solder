import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * The link to the destination station resource.
 */
export interface LinksDestination {
  self?: string;
}

export const LinksDestinationSchema: TypedSchema<LinksDestination> = typed<LinksDestination>(object({
  self: optional(string()),
}));