import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * ClimateRemovalsBeneficiary
 *
 * 
 */
export interface ClimateRemovalsBeneficiary {
  /**
   * Publicly displayable name for the end beneficiary of carbon removal.
   */
  publicName: string;
}

export const ClimateRemovalsBeneficiarySchema: TypedSchema<ClimateRemovalsBeneficiary> = typed<ClimateRemovalsBeneficiary>(object({
  publicName: string(),
}));