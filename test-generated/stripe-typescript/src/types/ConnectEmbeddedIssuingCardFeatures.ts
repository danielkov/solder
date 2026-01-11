import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * ConnectEmbeddedIssuingCardFeatures
 *
 * 
 */
export interface ConnectEmbeddedIssuingCardFeatures {
  /**
   * Whether to allow card management features.
   */
  cardManagement: boolean;
  /**
   * Whether to allow card spend dispute management features.
   */
  cardSpendDisputeManagement: boolean;
  /**
   * Whether to allow cardholder management features.
   */
  cardholderManagement: boolean;
  /**
   * Whether to allow spend control management features.
   */
  spendControlManagement: boolean;
}

export const ConnectEmbeddedIssuingCardFeaturesSchema: TypedSchema<ConnectEmbeddedIssuingCardFeatures> = typed<ConnectEmbeddedIssuingCardFeatures>(object({
  cardManagement: boolean(),
  cardSpendDisputeManagement: boolean(),
  cardholderManagement: boolean(),
  spendControlManagement: boolean(),
}));