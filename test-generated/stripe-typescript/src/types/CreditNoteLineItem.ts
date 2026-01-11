import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingBillResourceInvoicingTaxesTax } from './BillingBillResourceInvoicingTaxesTax';
import { BillingBillResourceInvoicingTaxesTaxSchema } from './BillingBillResourceInvoicingTaxesTax';
import type { CreditNotesPretaxCreditAmount } from './CreditNotesPretaxCreditAmount';
import { CreditNotesPretaxCreditAmountSchema } from './CreditNotesPretaxCreditAmount';
import type { DiscountsResourceDiscountAmount } from './DiscountsResourceDiscountAmount';
import { DiscountsResourceDiscountAmountSchema } from './DiscountsResourceDiscountAmount';
import type { TaxRate } from './TaxRate';
import { TaxRateSchema } from './TaxRate';
/**
 * CreditNoteLineItem
 *
 * The credit note line item object
 */
export interface CreditNoteLineItem {
  /**
   * The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts.
   */
  amount: number;
  /**
   * Description of the item being credited.
   */
  description?: string;
  /**
   * The integer amount in cents (or local equivalent) representing the discount being credited for this line item.
   */
  discountAmount: number;
  /**
   * The amount of discount calculated per discount for this line item
   */
  discountAmounts: Array<DiscountsResourceDiscountAmount>;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * ID of the invoice line item being credited
   */
  invoiceLineItem?: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The pretax credit amounts (ex: discount, credit grants, etc) for this line item.
   */
  pretaxCreditAmounts: Array<CreditNotesPretaxCreditAmount>;
  /**
   * The number of units of product being credited.
   */
  quantity?: number;
  /**
   * The tax rates which apply to the line item.
   */
  taxRates: Array<TaxRate>;
  /**
   * The tax information of the line item.
   */
  taxes?: Array<BillingBillResourceInvoicingTaxesTax>;
  /**
   * The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. When the type is `invoice_line_item` there is an additional `invoice_line_item` property on the resource the value of which is the id of the credited line item on the invoice.
   */
  type: string;
  /**
   * The cost of each unit of product being credited.
   */
  unitAmount?: number;
  /**
   * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
   */
  unitAmountDecimal?: string;
}

export const CreditNoteLineItemSchema: TypedSchema<CreditNoteLineItem> = typed<CreditNoteLineItem>(object({
  amount: number(),
  description: optional(string()),
  discountAmount: number(),
  discountAmounts: array(DiscountsResourceDiscountAmountSchema),
  id: string(),
  invoiceLineItem: optional(string()),
  livemode: boolean(),
  object: string(),
  pretaxCreditAmounts: array(CreditNotesPretaxCreditAmountSchema),
  quantity: optional(number()),
  taxRates: array(TaxRateSchema),
  get taxes() { return optional(array(BillingBillResourceInvoicingTaxesTaxSchema)) },
  type: string(),
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
}));