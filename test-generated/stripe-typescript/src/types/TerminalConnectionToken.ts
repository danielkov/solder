import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TerminalConnectionToken
 *
 * A Connection Token is used by the Stripe Terminal SDK to connect to a reader.

Related guide: [Fleet management](https://stripe.com/docs/terminal/fleet/locations)
 */
export interface TerminalConnectionToken {
  /**
   * The id of the location that this connection token is scoped to. Note that location scoping only applies to internet-connected readers. For more details, see [the docs on scoping connection tokens](https://docs.stripe.com/terminal/fleet/locations-and-zones?dashboard-or-api=api#connection-tokens).
   */
  location?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Your application should pass this token to the Stripe Terminal SDK.
   */
  secret: string;
}

export const TerminalConnectionTokenSchema: TypedSchema<TerminalConnectionToken> = typed<TerminalConnectionToken>(object({
  location: optional(string()),
  object: string(),
  secret: string(),
}));