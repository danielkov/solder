import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingCardShippingCustoms
 *
 * 
 */
export interface IssuingCardShippingCustoms {
  /**
   * A registration number used for customs in Europe. See [https://www.gov.uk/eori](https://www.gov.uk/eori) for the UK and [https://ec.europa.eu/taxation_customs/business/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en](https://ec.europa.eu/taxation_customs/business/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en) for the EU.
   */
  eoriNumber?: string;
}

export const IssuingCardShippingCustomsSchema: TypedSchema<IssuingCardShippingCustoms> = typed<IssuingCardShippingCustoms>(object({
  eoriNumber: optional(string()),
}));