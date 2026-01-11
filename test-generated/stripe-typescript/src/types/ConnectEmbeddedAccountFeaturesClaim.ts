import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * ConnectEmbeddedAccountFeaturesClaim
 *
 * 
 */
export interface ConnectEmbeddedAccountFeaturesClaim {
  /**
   * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
   */
  disableStripeUserAuthentication: boolean;
  /**
   * Whether external account collection is enabled. This feature can only be `false` for accounts where you’re responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
   */
  externalAccountCollection: boolean;
}

export const ConnectEmbeddedAccountFeaturesClaimSchema: TypedSchema<ConnectEmbeddedAccountFeaturesClaim> = typed<ConnectEmbeddedAccountFeaturesClaim>(object({
  disableStripeUserAuthentication: boolean(),
  externalAccountCollection: boolean(),
}));