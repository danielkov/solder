import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PluginsItemUnionObject2 {
  engine?: string;
  id: string;
  maxResults?: number;
  searchPrompt?: string;
}

export const PluginsItemUnionObject2Schema: TypedSchema<PluginsItemUnionObject2> = typed<PluginsItemUnionObject2>(object({
  engine: optional(string()),
  id: string(),
  maxResults: optional(number()),
  searchPrompt: optional(string()),
}));