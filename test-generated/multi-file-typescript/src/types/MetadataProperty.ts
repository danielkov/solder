import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * Additional metadata about the user
 */
export interface MetadataProperty {
}

export const MetadataPropertySchema: TypedSchema<MetadataProperty> = typed<MetadataProperty>(object({
}));