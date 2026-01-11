import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PluginsItemUnionObject3Pdf } from './PluginsItemUnionObject3Pdf';
import { PluginsItemUnionObject3PdfSchema } from './PluginsItemUnionObject3Pdf';
export interface PluginsItemUnionObject3 {
  id: string;
  maxFiles?: number;
  pdf?: PluginsItemUnionObject3Pdf;
}

export const PluginsItemUnionObject3Schema: TypedSchema<PluginsItemUnionObject3> = typed<PluginsItemUnionObject3>(object({
  id: string(),
  maxFiles: optional(number()),
  get pdf() { return optional(PluginsItemUnionObject3PdfSchema) },
}));