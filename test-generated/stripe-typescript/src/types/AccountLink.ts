import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountLink
 *
 * Account Links are the means by which a Connect platform grants a connected account permission to access
Stripe-hosted applications, such as Connect Onboarding.

Related guide: [Connect Onboarding](https://stripe.com/docs/connect/custom/hosted-onboarding)
 */
export interface AccountLink {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The timestamp at which this account link will expire.
   */
  expiresAt: number;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The URL for the account link.
   */
  url: string;
}

export const AccountLinkSchema: TypedSchema<AccountLink> = typed<AccountLink>(object({
  created: number(),
  expiresAt: number(),
  object: string(),
  url: string(),
}));