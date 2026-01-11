import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingTransactionFleetData } from './IssuingTransactionFleetData';
import { IssuingTransactionFleetDataSchema } from './IssuingTransactionFleetData';
import type { IssuingTransactionFlightData } from './IssuingTransactionFlightData';
import { IssuingTransactionFlightDataSchema } from './IssuingTransactionFlightData';
import type { IssuingTransactionFuelData } from './IssuingTransactionFuelData';
import { IssuingTransactionFuelDataSchema } from './IssuingTransactionFuelData';
import type { IssuingTransactionLodgingData } from './IssuingTransactionLodgingData';
import { IssuingTransactionLodgingDataSchema } from './IssuingTransactionLodgingData';
import type { IssuingTransactionReceiptData } from './IssuingTransactionReceiptData';
import { IssuingTransactionReceiptDataSchema } from './IssuingTransactionReceiptData';
/**
 * IssuingTransactionPurchaseDetails
 *
 * 
 */
export interface IssuingTransactionPurchaseDetails {
  /**
   * Fleet-specific information for transactions using Fleet cards.
   */
  fleet?: IssuingTransactionFleetData;
  /**
   * Information about the flight that was purchased with this transaction.
   */
  flight?: IssuingTransactionFlightData;
  /**
   * Information about fuel that was purchased with this transaction.
   */
  fuel?: IssuingTransactionFuelData;
  /**
   * Information about lodging that was purchased with this transaction.
   */
  lodging?: IssuingTransactionLodgingData;
  /**
   * The line items in the purchase.
   */
  receipt?: Array<IssuingTransactionReceiptData>;
  /**
   * A merchant-specific order number.
   */
  reference?: string;
}

export const IssuingTransactionPurchaseDetailsSchema: TypedSchema<IssuingTransactionPurchaseDetails> = typed<IssuingTransactionPurchaseDetails>(object({
  get fleet() { return optional(IssuingTransactionFleetDataSchema) },
  get flight() { return optional(IssuingTransactionFlightDataSchema) },
  get fuel() { return optional(IssuingTransactionFuelDataSchema) },
  get lodging() { return optional(IssuingTransactionLodgingDataSchema) },
  get receipt() { return optional(array(IssuingTransactionReceiptDataSchema)) },
  reference: optional(string()),
}));