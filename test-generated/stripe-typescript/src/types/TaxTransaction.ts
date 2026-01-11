import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { LineItemsProperty4 } from './LineItemsProperty4';
import { LineItemsProperty4Schema } from './LineItemsProperty4';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { TaxProductResourceCustomerDetails } from './TaxProductResourceCustomerDetails';
import { TaxProductResourceCustomerDetailsSchema } from './TaxProductResourceCustomerDetails';
import type { TaxProductResourceShipFromDetails } from './TaxProductResourceShipFromDetails';
import { TaxProductResourceShipFromDetailsSchema } from './TaxProductResourceShipFromDetails';
import type { TaxProductResourceTaxTransactionResourceReversal } from './TaxProductResourceTaxTransactionResourceReversal';
import { TaxProductResourceTaxTransactionResourceReversalSchema } from './TaxProductResourceTaxTransactionResourceReversal';
import type { TaxProductResourceTaxTransactionShippingCost } from './TaxProductResourceTaxTransactionShippingCost';
import { TaxProductResourceTaxTransactionShippingCostSchema } from './TaxProductResourceTaxTransactionShippingCost';
/**
 * TaxProductResourceTaxTransaction
 *
 * A Tax Transaction records the tax collected from or refunded to your customer.

Related guide: [Calculate tax in your custom payment flow](https://stripe.com/docs/tax/custom#tax-transaction)
 */
export interface TaxTransaction {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The ID of an existing [Customer](https://stripe.com/docs/api/customers/object) used for the resource.
   */
  customer?: string;
  /**
   * TaxProductResourceCustomerDetails
   *
   * 
   */
  customerDetails: TaxProductResourceCustomerDetails;
  /**
   * Unique identifier for the transaction.
   */
  id: string;
  /**
   * TaxProductResourceTaxTransactionLineItemList
   *
   * The tax collected or refunded, by line item.
   */
  lineItems?: LineItemsProperty4;
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
   * The Unix timestamp representing when the tax liability is assumed or reduced.
   */
  postedAt: number;
  /**
   * A custom unique identifier, such as 'myOrder_123'.
   */
  reference: string;
  /**
   * If `type=reversal`, contains information about what was reversed.
   */
  reversal?: TaxProductResourceTaxTransactionResourceReversal;
  /**
   * The details of the ship from location, such as the address.
   */
  shipFromDetails?: TaxProductResourceShipFromDetails;
  /**
   * The shipping cost details for the transaction.
   */
  shippingCost?: TaxProductResourceTaxTransactionShippingCost;
  /**
   * Timestamp of date at which the tax rules and rates in effect applies for the calculation.
   */
  taxDate: number;
  /**
   * If `reversal`, this transaction reverses an earlier transaction.
   */
  type: string;
}

export const TaxTransactionSchema: TypedSchema<TaxTransaction> = typed<TaxTransaction>(object({
  created: number(),
  currency: string(),
  customer: optional(string()),
  customerDetails: TaxProductResourceCustomerDetailsSchema,
  id: string(),
  get lineItems() { return optional(LineItemsProperty4Schema) },
  livemode: boolean(),
  get metadata() { return optional(MetadataPropertySchema) },
  object: string(),
  postedAt: number(),
  reference: string(),
  get reversal() { return optional(TaxProductResourceTaxTransactionResourceReversalSchema) },
  get shipFromDetails() { return optional(TaxProductResourceShipFromDetailsSchema) },
  get shippingCost() { return optional(TaxProductResourceTaxTransactionShippingCostSchema) },
  taxDate: number(),
  type: string(),
}));