import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Rule } from './Rule';
import { RuleSchema } from './Rule';
/**
 * The ID of the Radar rule that matched the payment, if applicable.
 */
export type RuleOrRef = string | Rule;

export const RuleOrRefSchema: TypedSchema<RuleOrRef> = typed<RuleOrRef>(union(string(), RuleSchema));
