import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CardOrRef } from './CardOrRef';
import { CardOrRefSchema } from './CardOrRef';
import type { IssuingNetworkTokenNetworkData } from './IssuingNetworkTokenNetworkData';
import { IssuingNetworkTokenNetworkDataSchema } from './IssuingNetworkTokenNetworkData';
/**
 * IssuingNetworkToken
 *
 * An issuing token object is created when an issued card is added to a digital wallet. As a [card issuer](https://stripe.com/docs/issuing), you can [view and manage these tokens](https://stripe.com/docs/issuing/controls/token-management) through Stripe.
 */
export interface IssuingToken {
  /**
   * Card associated with this token.
   */
  card: CardOrRef;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The hashed ID derived from the device ID from the card network associated with the token.
   */
  deviceFingerprint?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The last four digits of the token.
   */
  last4?: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The token service provider / card network associated with the token.
   */
  network: string;
  /**
   * IssuingNetworkTokenNetworkData
   *
   * 
   */
  networkData?: IssuingNetworkTokenNetworkData;
  /**
   * Time at which the token was last updated by the card network. Measured in seconds since the Unix epoch.
   */
  networkUpdatedAt: number;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The usage state of the token.
   */
  status: string;
  /**
   * The digital wallet for this token, if one was used.
   */
  walletProvider?: string;
}

export const IssuingTokenSchema: TypedSchema<IssuingToken> = typed<IssuingToken>(object({
  card: CardOrRefSchema,
  created: number(),
  deviceFingerprint: optional(string()),
  id: string(),
  last4: optional(string()),
  livemode: boolean(),
  network: string(),
  get networkData() { return optional(IssuingNetworkTokenNetworkDataSchema) },
  networkUpdatedAt: number(),
  object: string(),
  status: string(),
  walletProvider: optional(string()),
}));