import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Function tool definition
 */
export interface ToolsItemUnionUnion {
  description?: string;
  name: string;
  parameters: MetadataProperty;
  strict?: boolean;
  type: string;
}

export const ToolsItemUnionUnionSchema: TypedSchema<ToolsItemUnionUnion> = typed<ToolsItemUnionUnion>(object({
  description: optional(string()),
  name: string(),
  parameters: MetadataPropertySchema,
  strict: optional(boolean()),
  type: string(),
}));