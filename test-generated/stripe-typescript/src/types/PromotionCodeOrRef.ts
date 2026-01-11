import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PromotionCode } from './PromotionCode';
import { PromotionCodeSchema } from './PromotionCode';
export type PromotionCodeOrRef = string | PromotionCode;

export const PromotionCodeOrRefSchema: TypedSchema<PromotionCodeOrRef> = typed<PromotionCodeOrRef>(union(string(), PromotionCodeSchema));