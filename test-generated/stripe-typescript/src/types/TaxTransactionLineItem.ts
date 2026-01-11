import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { TaxProductResourceTaxTransactionLineItemResourceReversal } from './TaxProductResourceTaxTransactionLineItemResourceReversal';
import { TaxProductResourceTaxTransactionLineItemResourceReversalSchema } from './TaxProductResourceTaxTransactionLineItemResourceReversal';
/**
 * TaxProductResourceTaxTransactionLineItem
 *
 * 
 */
export interface TaxTransactionLineItem {
  /**
   * The line item amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount.
   */
  amount: number;
  /**
   * The amount of tax calculated for this line item, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amountTax: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The ID of an existing [Product](https://stripe.com/docs/api/products/object).
   */
  product?: string;
  /**
   * The number of units of the item being purchased. For reversals, this is the quantity reversed.
   */
  quantity: number;
  /**
   * A custom identifier for this line item in the transaction.
   */
  reference: string;
  /**
   * If `type=reversal`, contains information about what was reversed.
   */
  reversal?: TaxProductResourceTaxTransactionLineItemResourceReversal;
  /**
   * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
   */
  taxBehavior: string;
  /**
   * The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for this resource.
   */
  taxCode: string;
  /**
   * If `reversal`, this line item reverses an earlier transaction.
   */
  type: string;
}

export const TaxTransactionLineItemSchema: TypedSchema<TaxTransactionLineItem> = typed<TaxTransactionLineItem>(object({
  amount: number(),
  amountTax: number(),
  id: string(),
  livemode: boolean(),
  get metadata() { return optional(MetadataPropertySchema) },
  object: string(),
  product: optional(string()),
  quantity: number(),
  reference: string(),
  get reversal() { return optional(TaxProductResourceTaxTransactionLineItemResourceReversalSchema) },
  taxBehavior: string(),
  taxCode: string(),
  type: string(),
}));