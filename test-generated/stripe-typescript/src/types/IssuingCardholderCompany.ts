import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * IssuingCardholderCompany
 *
 * 
 */
export interface IssuingCardholderCompany {
  /**
   * Whether the company's business ID number was provided.
   */
  taxIdProvided: boolean;
}

export const IssuingCardholderCompanySchema: TypedSchema<IssuingCardholderCompany> = typed<IssuingCardholderCompany>(object({
  taxIdProvided: boolean(),
}));