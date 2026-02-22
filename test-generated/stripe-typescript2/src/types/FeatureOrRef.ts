import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { EntitlementsFeature } from './EntitlementsFeature';
import { EntitlementsFeatureSchema } from './EntitlementsFeature';
/**
 * The [Feature](https://stripe.com/docs/api/entitlements/feature) that the customer is entitled to.
 */
export type FeatureOrRef = string | EntitlementsFeature;

export const FeatureOrRefSchema: TypedSchema<FeatureOrRef> = typed<FeatureOrRef>(union(string(), EntitlementsFeatureSchema));
