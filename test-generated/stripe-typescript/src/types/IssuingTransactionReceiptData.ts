import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingTransactionReceiptData
 *
 * 
 */
export interface IssuingTransactionReceiptData {
  /**
   * The description of the item. The maximum length of this field is 26 characters.
   */
  description?: string;
  /**
   * The quantity of the item.
   */
  quantity?: number;
  /**
   * The total for this line item in cents.
   */
  total?: number;
  /**
   * The unit cost of the item in cents.
   */
  unitCost?: number;
}

export const IssuingTransactionReceiptDataSchema: TypedSchema<IssuingTransactionReceiptData> = typed<IssuingTransactionReceiptData>(object({
  description: optional(string()),
  quantity: optional(number()),
  total: optional(number()),
  unitCost: optional(number()),
}));