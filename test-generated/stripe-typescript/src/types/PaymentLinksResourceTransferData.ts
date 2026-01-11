import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { DestinationOrRef } from './DestinationOrRef';
import { DestinationOrRefSchema } from './DestinationOrRef';
/**
 * PaymentLinksResourceTransferData
 *
 * 
 */
export interface PaymentLinksResourceTransferData {
  /**
   * The amount in cents (or local equivalent) that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
   */
  amount?: number;
  /**
   * The connected account receiving the transfer.
   */
  destination: DestinationOrRef;
}

export const PaymentLinksResourceTransferDataSchema: TypedSchema<PaymentLinksResourceTransferData> = typed<PaymentLinksResourceTransferData>(object({
  amount: optional(number()),
  destination: DestinationOrRefSchema,
}));