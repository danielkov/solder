import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { IssuingCard } from './IssuingCard';
import { IssuingCardSchema } from './IssuingCard';
export type ReplacedByOrRef = string | IssuingCard;

export const ReplacedByOrRefSchema: TypedSchema<ReplacedByOrRef> = typed<ReplacedByOrRef>(union(string(), IssuingCardSchema));