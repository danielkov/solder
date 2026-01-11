import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * PackageDimensions
 *
 * 
 */
export interface PackageDimensions {
  /**
   * Height, in inches.
   */
  height: number;
  /**
   * Length, in inches.
   */
  length: number;
  /**
   * Weight, in ounces.
   */
  weight: number;
  /**
   * Width, in inches.
   */
  width: number;
}

export const PackageDimensionsSchema: TypedSchema<PackageDimensions> = typed<PackageDimensions>(object({
  height: number(),
  length: number(),
  weight: number(),
  width: number(),
}));