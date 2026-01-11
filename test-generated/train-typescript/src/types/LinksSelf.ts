import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * The link to the current resource.
 */
export interface LinksSelf {
  self?: string;
}

export const LinksSelfSchema: TypedSchema<LinksSelf> = typed<LinksSelf>(object({
  self: optional(string()),
}));