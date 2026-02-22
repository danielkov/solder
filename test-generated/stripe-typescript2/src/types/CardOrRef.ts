import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { IssuingCard } from './IssuingCard';
import { IssuingCardSchema } from './IssuingCard';
/**
 * Card associated with this token.
 */
export type CardOrRef = string | IssuingCard;

export const CardOrRefSchema: TypedSchema<CardOrRef> = typed<CardOrRef>(union(string(), IssuingCardSchema));
