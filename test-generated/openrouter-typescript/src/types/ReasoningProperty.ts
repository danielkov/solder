import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { EffortUnion } from './EffortUnion';
import { EffortUnionSchema } from './EffortUnion';
import type { SummaryUnion } from './SummaryUnion';
import { SummaryUnionSchema } from './SummaryUnion';
export interface ReasoningProperty {
  effort?: EffortUnion;
  summary?: SummaryUnion;
}

export const ReasoningPropertySchema: TypedSchema<ReasoningProperty> = typed<ReasoningProperty>(object({
  get effort() { return optional(EffortUnionSchema) },
  get summary() { return optional(SummaryUnionSchema) },
}));