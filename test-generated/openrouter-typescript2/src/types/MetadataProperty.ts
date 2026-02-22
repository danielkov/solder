import { object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export interface MetadataProperty {}

export const MetadataPropertySchema: TypedSchema<MetadataProperty> = typed<MetadataProperty>(object({}));
