import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * LoginLink
 *
 * Login Links are single-use URLs that takes an Express account to the login page for their Stripe dashboard.
A Login Link differs from an [Account Link](https://stripe.com/docs/api/account_links) in that it takes the user directly to their [Express dashboard for the specified account](https://stripe.com/docs/connect/integrate-express-dashboard#create-login-link)
 */
export interface LoginLink {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The URL for the login link.
   */
  url: string;
}

export const LoginLinkSchema: TypedSchema<LoginLink> = typed<LoginLink>(object({
  created: number(),
  object: string(),
  url: string(),
}));