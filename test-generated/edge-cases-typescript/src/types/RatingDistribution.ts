import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
export interface RatingDistribution {
  /**
   * Count of 1-star ratings
   */
  1: number;
  /**
   * Count of 2-star ratings
   */
  2: number;
  /**
   * Count of 3-star ratings
   */
  3: number;
  /**
   * Count of 4-star ratings
   */
  4: number;
  /**
   * Count of 5-star ratings
   */
  5: number;
}

export const RatingDistributionSchema: TypedSchema<RatingDistribution> = typed<RatingDistribution>(object({
  1: number(),
  2: number(),
  3: number(),
  4: number(),
  5: number(),
}));