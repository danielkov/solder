import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { IssuingCardholder } from './IssuingCardholder';
import { IssuingCardholderSchema } from './IssuingCardholder';
export type CardholderOrRef = string | IssuingCardholder;

export const CardholderOrRefSchema: TypedSchema<CardholderOrRef> = typed<CardholderOrRef>(union(string(), IssuingCardholderSchema));