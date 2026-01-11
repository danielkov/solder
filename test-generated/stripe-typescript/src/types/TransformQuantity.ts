import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TransformQuantity
 *
 * 
 */
export interface TransformQuantity {
  /**
   * Divide usage by this number.
   */
  divideBy: number;
  /**
   * After division, either round the result `up` or `down`.
   */
  round: string;
}

export const TransformQuantitySchema: TypedSchema<TransformQuantity> = typed<TransformQuantity>(object({
  divideBy: number(),
  round: string(),
}));