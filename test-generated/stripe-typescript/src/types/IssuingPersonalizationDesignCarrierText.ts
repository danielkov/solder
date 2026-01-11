import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingPersonalizationDesignCarrierText
 *
 * 
 */
export interface IssuingPersonalizationDesignCarrierText {
  /**
   * The footer body text of the carrier letter.
   */
  footerBody?: string;
  /**
   * The footer title text of the carrier letter.
   */
  footerTitle?: string;
  /**
   * The header body text of the carrier letter.
   */
  headerBody?: string;
  /**
   * The header title text of the carrier letter.
   */
  headerTitle?: string;
}

export const IssuingPersonalizationDesignCarrierTextSchema: TypedSchema<IssuingPersonalizationDesignCarrierText> = typed<IssuingPersonalizationDesignCarrierText>(object({
  footerBody: optional(string()),
  footerTitle: optional(string()),
  headerBody: optional(string()),
  headerTitle: optional(string()),
}));