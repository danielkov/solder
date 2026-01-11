import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
export interface PluginsItemUnionObject {
  id: string;
}

export const PluginsItemUnionObjectSchema: TypedSchema<PluginsItemUnionObject> = typed<PluginsItemUnionObject>(object({
  id: string(),
}));