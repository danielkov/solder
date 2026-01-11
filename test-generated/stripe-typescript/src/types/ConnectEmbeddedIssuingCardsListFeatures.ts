import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * ConnectEmbeddedIssuingCardsListFeatures
 *
 * 
 */
export interface ConnectEmbeddedIssuingCardsListFeatures {
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
   * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
   */
  disableStripeUserAuthentication: boolean;
  /**
   * Whether to allow spend control management features.
   */
  spendControlManagement: boolean;
}

export const ConnectEmbeddedIssuingCardsListFeaturesSchema: TypedSchema<ConnectEmbeddedIssuingCardsListFeatures> = typed<ConnectEmbeddedIssuingCardsListFeatures>(object({
  cardManagement: boolean(),
  cardSpendDisputeManagement: boolean(),
  cardholderManagement: boolean(),
  disableStripeUserAuthentication: boolean(),
  spendControlManagement: boolean(),
}));