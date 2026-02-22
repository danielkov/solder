import { object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export interface PluginsItemUnionObject {
  id: string;
}

export const PluginsItemUnionObjectSchema: TypedSchema<PluginsItemUnionObject> = typed<PluginsItemUnionObject>(object({ id: string() }));
