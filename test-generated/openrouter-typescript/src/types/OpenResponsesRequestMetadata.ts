import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * Metadata key-value pairs for the request. Keys must be ≤64 characters and cannot contain brackets. Values must be ≤512 characters. Maximum 16 pairs allowed.
 */
export interface OpenResponsesRequestMetadata {
}

export const OpenResponsesRequestMetadataSchema: TypedSchema<OpenResponsesRequestMetadata> = typed<OpenResponsesRequestMetadata>(object({
}));