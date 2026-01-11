import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { EntitlementsFeature } from './EntitlementsFeature';
import { EntitlementsFeatureSchema } from './EntitlementsFeature';
export type FeatureOrRef = string | EntitlementsFeature;

export const FeatureOrRefSchema: TypedSchema<FeatureOrRef> = typed<FeatureOrRef>(union(string(), EntitlementsFeatureSchema));