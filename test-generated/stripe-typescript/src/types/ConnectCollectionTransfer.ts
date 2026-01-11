import { TypedSchema, boolean, number, object, string, typed } from '@speakeasy-api/tonic';

import type { DestinationOrRef } from './DestinationOrRef';
import { DestinationOrRefSchema } from './DestinationOrRef';
/**
 * ConnectCollectionTransfer
 *
 * 
 */
export interface ConnectCollectionTransfer {
  /**
   * Amount transferred, in cents (or local equivalent).
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * ID of the account that funds are being collected for.
   */
  destination: DestinationOrRef;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
}

export const ConnectCollectionTransferSchema: TypedSchema<ConnectCollectionTransfer> = typed<ConnectCollectionTransfer>(object({
  amount: number(),
  currency: string(),
  destination: DestinationOrRefSchema,
  id: string(),
  livemode: boolean(),
  object: string(),
}));