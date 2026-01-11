import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { IssuingPhysicalBundle } from './IssuingPhysicalBundle';
import { IssuingPhysicalBundleSchema } from './IssuingPhysicalBundle';
export type PhysicalBundleOrRef = string | IssuingPhysicalBundle;

export const PhysicalBundleOrRefSchema: TypedSchema<PhysicalBundleOrRef> = typed<PhysicalBundleOrRef>(union(string(), IssuingPhysicalBundleSchema));