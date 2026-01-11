import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PluginsItemUnionObject } from './PluginsItemUnionObject';
import { PluginsItemUnionObjectSchema } from './PluginsItemUnionObject';
import type { PluginsItemUnionObject2 } from './PluginsItemUnionObject2';
import { PluginsItemUnionObject2Schema } from './PluginsItemUnionObject2';
import type { PluginsItemUnionObject3 } from './PluginsItemUnionObject3';
import { PluginsItemUnionObject3Schema } from './PluginsItemUnionObject3';
export type PluginsItemUnion = PluginsItemUnionObject | PluginsItemUnionObject2 | PluginsItemUnionObject3;

export const PluginsItemUnionSchema: TypedSchema<PluginsItemUnion> = typed<PluginsItemUnion>(union(PluginsItemUnionObjectSchema, PluginsItemUnionObject2Schema, PluginsItemUnionObject3Schema));