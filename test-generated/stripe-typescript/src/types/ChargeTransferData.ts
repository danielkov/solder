import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { DestinationOrRef } from './DestinationOrRef';
import { DestinationOrRefSchema } from './DestinationOrRef';
/**
 * ChargeTransferData
 *
 * 
 */
export interface ChargeTransferData {
  /**
   * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
   */
  amount?: number;
  /**
   * ID of an existing, connected Stripe account to transfer funds to if `transfer_data` was specified in the charge request.
   */
  destination: DestinationOrRef;
}

export const ChargeTransferDataSchema: TypedSchema<ChargeTransferData> = typed<ChargeTransferData>(object({
  amount: optional(number()),
  destination: DestinationOrRefSchema,
}));