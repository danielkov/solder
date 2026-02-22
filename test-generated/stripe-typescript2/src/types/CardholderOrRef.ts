import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { IssuingCardholder } from './IssuingCardholder';
import { IssuingCardholderSchema } from './IssuingCardholder';
/**
 * The cardholder to whom this authorization belongs.
 */
export type CardholderOrRef = string | IssuingCardholder;

export const CardholderOrRefSchema: TypedSchema<CardholderOrRef> = typed<CardholderOrRef>(union(string(), IssuingCardholderSchema));
