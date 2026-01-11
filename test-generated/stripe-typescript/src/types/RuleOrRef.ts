import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Rule } from './Rule';
import { RuleSchema } from './Rule';
export type RuleOrRef = string | Rule;

export const RuleOrRefSchema: TypedSchema<RuleOrRef> = typed<RuleOrRef>(union(string(), RuleSchema));