import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TransformUsage
 *
 * 
 */
export interface TransformUsage {
  /**
   * Divide usage by this number.
   */
  divideBy: number;
  /**
   * After division, either round the result `up` or `down`.
   */
  round: string;
}

export const TransformUsageSchema: TypedSchema<TransformUsage> = typed<TransformUsage>(object({
  divideBy: number(),
  round: string(),
}));