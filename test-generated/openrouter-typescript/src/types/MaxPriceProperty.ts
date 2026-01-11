import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { BigNumberUnion } from './BigNumberUnion';
import { BigNumberUnionSchema } from './BigNumberUnion';
/**
 * The object specifying the maximum price you want to pay for this request. USD price per million tokens, for prompt and completion.
 */
export interface MaxPriceProperty {
  /**
   * A value in string or number format that is a large number
   */
  audio?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  completion?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  image?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  prompt?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  request?: BigNumberUnion;
}

export const MaxPricePropertySchema: TypedSchema<MaxPriceProperty> = typed<MaxPriceProperty>(object({
  get audio() { return optional(BigNumberUnionSchema) },
  get completion() { return optional(BigNumberUnionSchema) },
  get image() { return optional(BigNumberUnionSchema) },
  get prompt() { return optional(BigNumberUnionSchema) },
  get request() { return optional(BigNumberUnionSchema) },
}));