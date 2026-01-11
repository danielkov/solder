import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { PromotionCode } from './PromotionCode';
import { PromotionCodeSchema } from './PromotionCode';
/**
 * PromotionCodesResourcePromotionCodeList
 *
 * 
 */
export interface GetPromotionCodesResponse {
  data: Array<PromotionCode>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const GetPromotionCodesResponseSchema: TypedSchema<GetPromotionCodesResponse> = typed<GetPromotionCodesResponse>(object({
  data: array(PromotionCodeSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));