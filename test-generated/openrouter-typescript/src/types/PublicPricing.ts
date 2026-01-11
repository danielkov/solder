import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { BigNumberUnion } from './BigNumberUnion';
import { BigNumberUnionSchema } from './BigNumberUnion';
/**
 * Pricing information for the model
 */
export interface PublicPricing {
  /**
   * A value in string or number format that is a large number
   */
  audio?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  completion: BigNumberUnion;
  discount?: number;
  /**
   * A value in string or number format that is a large number
   */
  image?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  imageOutput?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  imageToken?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  inputAudioCache?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  inputCacheRead?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  inputCacheWrite?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  internalReasoning?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  prompt: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  request?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  webSearch?: BigNumberUnion;
}

export const PublicPricingSchema: TypedSchema<PublicPricing> = typed<PublicPricing>(object({
  get audio() { return optional(BigNumberUnionSchema) },
  completion: BigNumberUnionSchema,
  discount: optional(number()),
  get image() { return optional(BigNumberUnionSchema) },
  get imageOutput() { return optional(BigNumberUnionSchema) },
  get imageToken() { return optional(BigNumberUnionSchema) },
  get inputAudioCache() { return optional(BigNumberUnionSchema) },
  get inputCacheRead() { return optional(BigNumberUnionSchema) },
  get inputCacheWrite() { return optional(BigNumberUnionSchema) },
  get internalReasoning() { return optional(BigNumberUnionSchema) },
  prompt: BigNumberUnionSchema,
  get request() { return optional(BigNumberUnionSchema) },
  get webSearch() { return optional(BigNumberUnionSchema) },
}));