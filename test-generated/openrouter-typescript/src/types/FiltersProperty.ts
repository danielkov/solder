import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface FiltersProperty {
  allowedDomains?: Array<string>;
}

export const FiltersPropertySchema: TypedSchema<FiltersProperty> = typed<FiltersProperty>(object({
  allowedDomains: optional(array(string())),
}));