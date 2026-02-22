import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { IssuingCard } from './IssuingCard';
import { IssuingCardSchema } from './IssuingCard';
/**
 * The card this card replaces, if any.
 */
export type ReplacementForOrRef = string | IssuingCard;

export const ReplacementForOrRefSchema: TypedSchema<ReplacementForOrRef> = typed<ReplacementForOrRef>(union(string(), IssuingCardSchema));
