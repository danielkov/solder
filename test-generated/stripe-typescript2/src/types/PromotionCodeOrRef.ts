import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PromotionCode } from './PromotionCode';
import { PromotionCodeSchema } from './PromotionCode';
/**
 * The promotion code applied to create this discount.
 */
export type PromotionCodeOrRef = string | PromotionCode;

export const PromotionCodeOrRefSchema: TypedSchema<PromotionCodeOrRef> = typed<PromotionCodeOrRef>(union(string(), PromotionCodeSchema));
