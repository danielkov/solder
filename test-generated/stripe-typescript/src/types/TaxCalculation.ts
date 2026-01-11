import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { LineItemsProperty3 } from './LineItemsProperty3';
import { LineItemsProperty3Schema } from './LineItemsProperty3';
import type { TaxProductResourceCustomerDetails } from './TaxProductResourceCustomerDetails';
import { TaxProductResourceCustomerDetailsSchema } from './TaxProductResourceCustomerDetails';
import type { TaxProductResourceShipFromDetails } from './TaxProductResourceShipFromDetails';
import { TaxProductResourceShipFromDetailsSchema } from './TaxProductResourceShipFromDetails';
import type { TaxProductResourceTaxBreakdown } from './TaxProductResourceTaxBreakdown';
import { TaxProductResourceTaxBreakdownSchema } from './TaxProductResourceTaxBreakdown';
import type { TaxProductResourceTaxCalculationShippingCost } from './TaxProductResourceTaxCalculationShippingCost';
import { TaxProductResourceTaxCalculationShippingCostSchema } from './TaxProductResourceTaxCalculationShippingCost';
/**
 * TaxProductResourceTaxCalculation
 *
 * A Tax Calculation allows you to calculate the tax to collect from your customer.

Related guide: [Calculate tax in your custom payment flow](https://stripe.com/docs/tax/custom)
 */
export interface TaxCalculation {
  /**
   * Total amount after taxes in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amountTotal: number;
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
   * Timestamp of date at which the tax calculation will expire.
   */
  expiresAt?: number;
  /**
   * Unique identifier for the calculation.
   */
  id?: string;
  /**
   * TaxProductResourceTaxCalculationLineItemList
   *
   * The list of items the customer is purchasing.
   */
  lineItems?: LineItemsProperty3;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The details of the ship from location, such as the address.
   */
  shipFromDetails?: TaxProductResourceShipFromDetails;
  /**
   * The shipping cost details for the calculation.
   */
  shippingCost?: TaxProductResourceTaxCalculationShippingCost;
  /**
   * The amount of tax to be collected on top of the line item prices.
   */
  taxAmountExclusive: number;
  /**
   * The amount of tax already included in the line item prices.
   */
  taxAmountInclusive: number;
  /**
   * Breakdown of individual tax amounts that add up to the total.
   */
  taxBreakdown: Array<TaxProductResourceTaxBreakdown>;
  /**
   * Timestamp of date at which the tax rules and rates in effect applies for the calculation.
   */
  taxDate: number;
}

export const TaxCalculationSchema: TypedSchema<TaxCalculation> = typed<TaxCalculation>(object({
  amountTotal: number(),
  currency: string(),
  customer: optional(string()),
  customerDetails: TaxProductResourceCustomerDetailsSchema,
  expiresAt: optional(number()),
  id: optional(string()),
  get lineItems() { return optional(LineItemsProperty3Schema) },
  livemode: boolean(),
  object: string(),
  get shipFromDetails() { return optional(TaxProductResourceShipFromDetailsSchema) },
  get shippingCost() { return optional(TaxProductResourceTaxCalculationShippingCostSchema) },
  taxAmountExclusive: number(),
  taxAmountInclusive: number(),
  taxBreakdown: array(TaxProductResourceTaxBreakdownSchema),
  taxDate: number(),
}));