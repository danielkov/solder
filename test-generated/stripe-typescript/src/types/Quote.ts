import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ApplicationUnion } from './ApplicationUnion';
import { ApplicationUnionSchema } from './ApplicationUnion';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { DefaultTaxRatesItemOrRef } from './DefaultTaxRatesItemOrRef';
import { DefaultTaxRatesItemOrRefSchema } from './DefaultTaxRatesItemOrRef';
import type { DiscountsItemOrRef } from './DiscountsItemOrRef';
import { DiscountsItemOrRefSchema } from './DiscountsItemOrRef';
import type { InvoiceSettingQuoteSetting } from './InvoiceSettingQuoteSetting';
import { InvoiceSettingQuoteSettingSchema } from './InvoiceSettingQuoteSetting';
import type { InvoiceUnion } from './InvoiceUnion';
import { InvoiceUnionSchema } from './InvoiceUnion';
import type { LineItemsProperty } from './LineItemsProperty';
import { LineItemsPropertySchema } from './LineItemsProperty';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { OnBehalfOfOrRef } from './OnBehalfOfOrRef';
import { OnBehalfOfOrRefSchema } from './OnBehalfOfOrRef';
import type { QuotesResourceAutomaticTax } from './QuotesResourceAutomaticTax';
import { QuotesResourceAutomaticTaxSchema } from './QuotesResourceAutomaticTax';
import type { QuotesResourceComputed } from './QuotesResourceComputed';
import { QuotesResourceComputedSchema } from './QuotesResourceComputed';
import type { QuotesResourceFromQuote } from './QuotesResourceFromQuote';
import { QuotesResourceFromQuoteSchema } from './QuotesResourceFromQuote';
import type { QuotesResourceStatusTransitions } from './QuotesResourceStatusTransitions';
import { QuotesResourceStatusTransitionsSchema } from './QuotesResourceStatusTransitions';
import type { QuotesResourceSubscriptionDataSubscriptionData } from './QuotesResourceSubscriptionDataSubscriptionData';
import { QuotesResourceSubscriptionDataSubscriptionDataSchema } from './QuotesResourceSubscriptionDataSubscriptionData';
import type { QuotesResourceTotalDetails } from './QuotesResourceTotalDetails';
import { QuotesResourceTotalDetailsSchema } from './QuotesResourceTotalDetails';
import type { QuotesResourceTransferData } from './QuotesResourceTransferData';
import { QuotesResourceTransferDataSchema } from './QuotesResourceTransferData';
import type { SubscriptionOrRef } from './SubscriptionOrRef';
import { SubscriptionOrRefSchema } from './SubscriptionOrRef';
import type { SubscriptionScheduleOrRef } from './SubscriptionScheduleOrRef';
import { SubscriptionScheduleOrRefSchema } from './SubscriptionScheduleOrRef';
import type { TestClockOrRef } from './TestClockOrRef';
import { TestClockOrRefSchema } from './TestClockOrRef';
/**
 * Quote
 *
 * A Quote is a way to model prices that you'd like to provide to a customer.
Once accepted, it will automatically create an invoice, subscription or subscription schedule.
 */
export interface Quote {
  /**
   * Total before any discounts or taxes are applied.
   */
  amountSubtotal: number;
  /**
   * Total after discounts and taxes are applied.
   */
  amountTotal: number;
  /**
   * ID of the Connect Application that created the quote.
   */
  application?: ApplicationUnion;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. Only applicable if there are no line items with recurring prices on the quote.
   */
  applicationFeeAmount?: number;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. Only applicable if there are line items with recurring prices on the quote.
   */
  applicationFeePercent?: number;
  /**
   * QuotesResourceAutomaticTax
   *
   * 
   */
  automaticTax: QuotesResourceAutomaticTax;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or on finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
   */
  collectionMethod: string;
  /**
   * QuotesResourceComputed
   *
   * 
   */
  computed: QuotesResourceComputed;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;
  /**
   * The customer which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
   */
  customer?: CustomerUnion;
  /**
   * The tax rates applied to this quote.
   */
  defaultTaxRates?: Array<DefaultTaxRatesItemOrRef>;
  /**
   * A description that will be displayed on the quote PDF.
   */
  description?: string;
  /**
   * The discounts applied to this quote.
   */
  discounts: Array<DiscountsItemOrRef>;
  /**
   * The date on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
   */
  expiresAt: number;
  /**
   * A footer that will be displayed on the quote PDF.
   */
  footer?: string;
  /**
   * Details of the quote that was cloned. See the [cloning documentation](https://stripe.com/docs/quotes/clone) for more details.
   */
  fromQuote?: QuotesResourceFromQuote;
  /**
   * A header that will be displayed on the quote PDF.
   */
  header?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The invoice that was created from this quote.
   */
  invoice?: InvoiceUnion;
  /**
   * InvoiceSettingQuoteSetting
   *
   * 
   */
  invoiceSettings: InvoiceSettingQuoteSetting;
  /**
   * QuotesResourceListLineItems
   *
   * A list of items the customer is being quoted for.
   */
  lineItems?: LineItemsProperty;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * A unique number that identifies this particular quote. This number is assigned once the quote is [finalized](https://stripe.com/docs/quotes/overview#finalize).
   */
  number?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The account on behalf of which to charge. See the [Connect documentation](https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts) for details.
   */
  onBehalfOf?: OnBehalfOfOrRef;
  /**
   * The status of the quote.
   */
  status: string;
  /**
   * QuotesResourceStatusTransitions
   *
   * 
   */
  statusTransitions: QuotesResourceStatusTransitions;
  /**
   * The subscription that was created or updated from this quote.
   */
  subscription?: SubscriptionOrRef;
  /**
   * QuotesResourceSubscriptionDataSubscriptionData
   *
   * 
   */
  subscriptionData: QuotesResourceSubscriptionDataSubscriptionData;
  /**
   * The subscription schedule that was created or updated from this quote.
   */
  subscriptionSchedule?: SubscriptionScheduleOrRef;
  /**
   * ID of the test clock this quote belongs to.
   */
  testClock?: TestClockOrRef;
  /**
   * QuotesResourceTotalDetails
   *
   * 
   */
  totalDetails: QuotesResourceTotalDetails;
  /**
   * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices.
   */
  transferData?: QuotesResourceTransferData;
}

export const QuoteSchema: TypedSchema<Quote> = typed<Quote>(object({
  amountSubtotal: number(),
  amountTotal: number(),
  get application() { return optional(ApplicationUnionSchema) },
  applicationFeeAmount: optional(number()),
  applicationFeePercent: optional(number()),
  automaticTax: QuotesResourceAutomaticTaxSchema,
  collectionMethod: string(),
  computed: QuotesResourceComputedSchema,
  created: number(),
  currency: optional(string()),
  get customer() { return optional(CustomerUnionSchema) },
  get defaultTaxRates() { return optional(array(DefaultTaxRatesItemOrRefSchema)) },
  description: optional(string()),
  discounts: array(DiscountsItemOrRefSchema),
  expiresAt: number(),
  footer: optional(string()),
  get fromQuote() { return optional(QuotesResourceFromQuoteSchema) },
  header: optional(string()),
  id: string(),
  get invoice() { return optional(InvoiceUnionSchema) },
  invoiceSettings: InvoiceSettingQuoteSettingSchema,
  get lineItems() { return optional(LineItemsPropertySchema) },
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  number: optional(string()),
  object: string(),
  get onBehalfOf() { return optional(OnBehalfOfOrRefSchema) },
  status: string(),
  statusTransitions: QuotesResourceStatusTransitionsSchema,
  get subscription() { return optional(SubscriptionOrRefSchema) },
  subscriptionData: QuotesResourceSubscriptionDataSubscriptionDataSchema,
  get subscriptionSchedule() { return optional(SubscriptionScheduleOrRefSchema) },
  get testClock() { return optional(TestClockOrRefSchema) },
  totalDetails: QuotesResourceTotalDetailsSchema,
  get transferData() { return optional(QuotesResourceTransferDataSchema) },
}));