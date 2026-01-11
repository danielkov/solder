import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PluginsItemUnionObject3Pdf {
  engine?: string;
}

export const PluginsItemUnionObject3PdfSchema: TypedSchema<PluginsItemUnionObject3Pdf> = typed<PluginsItemUnionObject3Pdf>(object({
  engine: optional(string()),
}));