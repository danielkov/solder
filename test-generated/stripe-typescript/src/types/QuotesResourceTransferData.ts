import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { DestinationOrRef } from './DestinationOrRef';
import { DestinationOrRefSchema } from './DestinationOrRef';
/**
 * QuotesResourceTransferData
 *
 * 
 */
export interface QuotesResourceTransferData {
  /**
   * The amount in cents (or local equivalent) that will be transferred to the destination account when the invoice is paid. By default, the entire amount is transferred to the destination.
   */
  amount?: number;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount will be transferred to the destination.
   */
  amountPercent?: number;
  /**
   * The account where funds from the payment will be transferred to upon payment success.
   */
  destination: DestinationOrRef;
}

export const QuotesResourceTransferDataSchema: TypedSchema<QuotesResourceTransferData> = typed<QuotesResourceTransferData>(object({
  amount: optional(number()),
  amountPercent: optional(number()),
  destination: DestinationOrRefSchema,
}));