import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Function tool definition
 */
export interface OpenResponsesFunctionTool {
  description?: string;
  name: string;
  parameters: MetadataProperty;
  strict?: boolean;
  type: string;
}

export const OpenResponsesFunctionToolSchema: TypedSchema<OpenResponsesFunctionTool> = typed<OpenResponsesFunctionTool>(object({
  description: optional(string()),
  name: string(),
  parameters: MetadataPropertySchema,
  strict: optional(boolean()),
  type: string(),
}));