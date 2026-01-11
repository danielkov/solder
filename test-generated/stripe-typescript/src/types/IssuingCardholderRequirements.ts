import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingCardholderRequirements
 *
 * 
 */
export interface IssuingCardholderRequirements {
  /**
   * If `disabled_reason` is present, all cards will decline authorizations with `cardholder_verification_required` reason.
   */
  disabledReason?: string;
  /**
   * Array of fields that need to be collected in order to verify and re-enable the cardholder.
   */
  pastDue?: Array<string>;
}

export const IssuingCardholderRequirementsSchema: TypedSchema<IssuingCardholderRequirements> = typed<IssuingCardholderRequirements>(object({
  disabledReason: optional(string()),
  pastDue: optional(array(string())),
}));