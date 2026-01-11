import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export interface MetadataProperty {
}

export const MetadataPropertySchema: TypedSchema<MetadataProperty> = typed<MetadataProperty>(object({
}));