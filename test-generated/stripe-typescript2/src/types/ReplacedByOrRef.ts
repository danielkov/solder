import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { IssuingCard } from './IssuingCard';
import { IssuingCardSchema } from './IssuingCard';
/**
 * The latest card that replaces this card, if any.
 */
export type ReplacedByOrRef = string | IssuingCard;

export const ReplacedByOrRefSchema: TypedSchema<ReplacedByOrRef> = typed<ReplacedByOrRef>(union(string(), IssuingCardSchema));
