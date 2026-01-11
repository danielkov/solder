import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * standard
 */
export interface DefaultPostTaxRegistrationsRequestStandard {
  placeOfSupplyScheme: string;
}

export const DefaultPostTaxRegistrationsRequestStandardSchema: TypedSchema<DefaultPostTaxRegistrationsRequestStandard> = typed<DefaultPostTaxRegistrationsRequestStandard>(object({
  placeOfSupplyScheme: string(),
}));