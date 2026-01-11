import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { ReasoningSummaryVerbosity } from './ReasoningSummaryVerbosity';
import { ReasoningSummaryVerbositySchema } from './ReasoningSummaryVerbosity';
export type SummaryUnion = ReasoningSummaryVerbosity | any | null;

export const SummaryUnionSchema: TypedSchema<SummaryUnion> = typed<SummaryUnion>(union(ReasoningSummaryVerbositySchema, nullable(unknown())));