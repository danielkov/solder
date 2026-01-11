import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { ProviderName } from './ProviderName';
import { ProviderNameSchema } from './ProviderName';
export type IgnoreItemOrRef = ProviderName | string;

export const IgnoreItemOrRefSchema: TypedSchema<IgnoreItemOrRef> = typed<IgnoreItemOrRef>(union(ProviderNameSchema, string()));