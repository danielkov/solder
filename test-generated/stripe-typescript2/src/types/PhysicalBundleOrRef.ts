import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { IssuingPhysicalBundle } from './IssuingPhysicalBundle';
import { IssuingPhysicalBundleSchema } from './IssuingPhysicalBundle';
/**
 * The physical bundle object belonging to this personalization design.
 */
export type PhysicalBundleOrRef = string | IssuingPhysicalBundle;

export const PhysicalBundleOrRefSchema: TypedSchema<PhysicalBundleOrRef> = typed<PhysicalBundleOrRef>(union(string(), IssuingPhysicalBundleSchema));
