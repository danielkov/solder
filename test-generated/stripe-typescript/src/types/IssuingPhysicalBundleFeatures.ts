import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingPhysicalBundleFeatures
 *
 * 
 */
export interface IssuingPhysicalBundleFeatures {
  /**
   * The policy for how to use card logo images in a card design with this physical bundle.
   */
  cardLogo: string;
  /**
   * The policy for how to use carrier letter text in a card design with this physical bundle.
   */
  carrierText: string;
  /**
   * The policy for how to use a second line on a card with this physical bundle.
   */
  secondLine: string;
}

export const IssuingPhysicalBundleFeaturesSchema: TypedSchema<IssuingPhysicalBundleFeatures> = typed<IssuingPhysicalBundleFeatures>(object({
  cardLogo: string(),
  carrierText: string(),
  secondLine: string(),
}));