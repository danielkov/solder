import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { IssuingCard } from './IssuingCard';
import { IssuingCardSchema } from './IssuingCard';
export type CardOrRef = string | IssuingCard;

export const CardOrRefSchema: TypedSchema<CardOrRef> = typed<CardOrRef>(union(string(), IssuingCardSchema));