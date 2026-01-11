import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * DisputeEnhancedEligibilityVisaCompliance
 *
 * 
 */
export interface DisputeEnhancedEligibilityVisaCompliance {
  /**
   * Visa compliance eligibility status.
   */
  status: string;
}

export const DisputeEnhancedEligibilityVisaComplianceSchema: TypedSchema<DisputeEnhancedEligibilityVisaCompliance> = typed<DisputeEnhancedEligibilityVisaCompliance>(object({
  status: string(),
}));