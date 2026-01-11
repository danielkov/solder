import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TaxCalculationLineItem } from './TaxCalculationLineItem';
import { TaxCalculationLineItemSchema } from './TaxCalculationLineItem';
/**
 * TaxProductResourceTaxCalculationLineItemList
 *
 * The list of items the customer is purchasing.
 */
export interface LineItemsProperty3 {
  /**
   * Details about each object.
   */
  data: Array<TaxCalculationLineItem>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const LineItemsProperty3Schema: TypedSchema<LineItemsProperty3> = typed<LineItemsProperty3>(object({
  data: array(TaxCalculationLineItemSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));