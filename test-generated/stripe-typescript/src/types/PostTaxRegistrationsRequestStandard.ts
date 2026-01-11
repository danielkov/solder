import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * standard
 */
export interface PostTaxRegistrationsRequestStandard {
  placeOfSupplyScheme?: string;
}

export const PostTaxRegistrationsRequestStandardSchema: TypedSchema<PostTaxRegistrationsRequestStandard> = typed<PostTaxRegistrationsRequestStandard>(object({
  placeOfSupplyScheme: optional(string()),
}));