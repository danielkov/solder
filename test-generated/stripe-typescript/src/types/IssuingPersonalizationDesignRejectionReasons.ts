import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingPersonalizationDesignRejectionReasons
 *
 * 
 */
export interface IssuingPersonalizationDesignRejectionReasons {
  /**
   * The reason(s) the card logo was rejected.
   */
  cardLogo?: Array<string>;
  /**
   * The reason(s) the carrier text was rejected.
   */
  carrierText?: Array<string>;
}

export const IssuingPersonalizationDesignRejectionReasonsSchema: TypedSchema<IssuingPersonalizationDesignRejectionReasons> = typed<IssuingPersonalizationDesignRejectionReasons>(object({
  cardLogo: optional(array(string())),
  carrierText: optional(array(string())),
}));