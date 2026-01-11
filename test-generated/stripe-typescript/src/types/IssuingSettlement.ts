import { TypedSchema, boolean, number, object, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * IssuingSettlement
 *
 * When a non-stripe BIN is used, any use of an [issued card](https://stripe.com/docs/issuing) must be settled directly with the card network. The net amount owed is represented by an Issuing `Settlement` object.
 */
export interface IssuingSettlement {
  /**
   * The Bank Identification Number reflecting this settlement record.
   */
  bin: string;
  /**
   * The date that the transactions are cleared and posted to user's accounts.
   */
  clearingDate: number;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The total interchange received as reimbursement for the transactions.
   */
  interchangeFeesAmount: number;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * The total net amount required to settle with the network.
   */
  netTotalAmount: number;
  /**
   * The card network for this settlement report. One of ["visa", "maestro"]
   */
  network: string;
  /**
   * The total amount of fees owed to the network.
   */
  networkFeesAmount: number;
  /**
   * The Settlement Identification Number assigned by the network.
   */
  networkSettlementIdentifier: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * One of `international` or `uk_national_net`.
   */
  settlementService: string;
  /**
   * The current processing status of this settlement.
   */
  status: string;
  /**
   * The total transaction amount reflected in this settlement.
   */
  transactionAmount: number;
  /**
   * The total number of transactions reflected in this settlement.
   */
  transactionCount: number;
}

export const IssuingSettlementSchema: TypedSchema<IssuingSettlement> = typed<IssuingSettlement>(object({
  bin: string(),
  clearingDate: number(),
  created: number(),
  currency: string(),
  id: string(),
  interchangeFeesAmount: number(),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  netTotalAmount: number(),
  network: string(),
  networkFeesAmount: number(),
  networkSettlementIdentifier: string(),
  object: string(),
  settlementService: string(),
  status: string(),
  transactionAmount: number(),
  transactionCount: number(),
}));