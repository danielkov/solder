import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { IssuingCard } from './IssuingCard';
import { IssuingCardSchema } from './IssuingCard';
export type ReplacementForOrRef = string | IssuingCard;

export const ReplacementForOrRefSchema: TypedSchema<ReplacementForOrRef> = typed<ReplacementForOrRef>(union(string(), IssuingCardSchema));