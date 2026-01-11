import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountTaxIdsItemUnion } from './AccountTaxIdsItemUnion';
import { AccountTaxIdsItemUnionSchema } from './AccountTaxIdsItemUnion';
import type { Address } from './Address';
import { AddressSchema } from './Address';
import type { ApiErrors } from './ApiErrors';
import { ApiErrorsSchema } from './ApiErrors';
import type { ApplicationUnion } from './ApplicationUnion';
import { ApplicationUnionSchema } from './ApplicationUnion';
import type { AutomaticTax } from './AutomaticTax';
import { AutomaticTaxSchema } from './AutomaticTax';
import type { BillingBillResourceInvoicingParentsInvoiceParent } from './BillingBillResourceInvoicingParentsInvoiceParent';
import { BillingBillResourceInvoicingParentsInvoiceParentSchema } from './BillingBillResourceInvoicingParentsInvoiceParent';
import type { BillingBillResourceInvoicingTaxesTax } from './BillingBillResourceInvoicingTaxesTax';
import { BillingBillResourceInvoicingTaxesTaxSchema } from './BillingBillResourceInvoicingTaxesTax';
import type { ConnectAccountReference } from './ConnectAccountReference';
import { ConnectAccountReferenceSchema } from './ConnectAccountReference';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { DefaultPaymentMethodOrRef } from './DefaultPaymentMethodOrRef';
import { DefaultPaymentMethodOrRefSchema } from './DefaultPaymentMethodOrRef';
import type { DefaultSourceUnion } from './DefaultSourceUnion';
import { DefaultSourceUnionSchema } from './DefaultSourceUnion';
import type { DiscountsItemUnion } from './DiscountsItemUnion';
import { DiscountsItemUnionSchema } from './DiscountsItemUnion';
import type { DiscountsResourceDiscountAmount } from './DiscountsResourceDiscountAmount';
import { DiscountsResourceDiscountAmountSchema } from './DiscountsResourceDiscountAmount';
import type { InvoiceSettingCustomField } from './InvoiceSettingCustomField';
import { InvoiceSettingCustomFieldSchema } from './InvoiceSettingCustomField';
import type { InvoiceThresholdReason } from './InvoiceThresholdReason';
import { InvoiceThresholdReasonSchema } from './InvoiceThresholdReason';
import type { InvoicesPaymentSettings } from './InvoicesPaymentSettings';
import { InvoicesPaymentSettingsSchema } from './InvoicesPaymentSettings';
import type { InvoicesResourceConfirmationSecret } from './InvoicesResourceConfirmationSecret';
import { InvoicesResourceConfirmationSecretSchema } from './InvoicesResourceConfirmationSecret';
import type { InvoicesResourceFromInvoice } from './InvoicesResourceFromInvoice';
import { InvoicesResourceFromInvoiceSchema } from './InvoicesResourceFromInvoice';
import type { InvoicesResourceInvoiceRendering } from './InvoicesResourceInvoiceRendering';
import { InvoicesResourceInvoiceRenderingSchema } from './InvoicesResourceInvoiceRendering';
import type { InvoicesResourceInvoiceTaxId } from './InvoicesResourceInvoiceTaxId';
import { InvoicesResourceInvoiceTaxIdSchema } from './InvoicesResourceInvoiceTaxId';
import type { InvoicesResourcePretaxCreditAmount } from './InvoicesResourcePretaxCreditAmount';
import { InvoicesResourcePretaxCreditAmountSchema } from './InvoicesResourcePretaxCreditAmount';
import type { InvoicesResourceShippingCost } from './InvoicesResourceShippingCost';
import { InvoicesResourceShippingCostSchema } from './InvoicesResourceShippingCost';
import type { InvoicesResourceStatusTransitions } from './InvoicesResourceStatusTransitions';
import { InvoicesResourceStatusTransitionsSchema } from './InvoicesResourceStatusTransitions';
import type { LatestRevisionOrRef } from './LatestRevisionOrRef';
import { LatestRevisionOrRefSchema } from './LatestRevisionOrRef';
import type { LinesProperty2 } from './LinesProperty2';
import { LinesProperty2Schema } from './LinesProperty2';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { OnBehalfOfOrRef } from './OnBehalfOfOrRef';
import { OnBehalfOfOrRefSchema } from './OnBehalfOfOrRef';
import type { PaymentsProperty } from './PaymentsProperty';
import { PaymentsPropertySchema } from './PaymentsProperty';
import type { Shipping } from './Shipping';
import { ShippingSchema } from './Shipping';
import type { TaxRate } from './TaxRate';
import { TaxRateSchema } from './TaxRate';
import type { TestClockOrRef } from './TestClockOrRef';
import { TestClockOrRefSchema } from './TestClockOrRef';
/**
 * Invoice
 *
 * Invoices are statements of amounts owed by a customer, and are either
generated one-off, or generated periodically from a subscription.

They contain [invoice items](https://stripe.com/docs/api#invoiceitems), and proration adjustments
that may be caused by subscription upgrades/downgrades (if necessary).

If your invoice is configured to be billed through automatic charges,
Stripe automatically finalizes your invoice and attempts payment. Note
that finalizing the invoice,
[when automatic](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection), does
not happen immediately as the invoice is created. Stripe waits
until one hour after the last webhook was successfully sent (or the last
webhook timed out after failing). If you (and the platforms you may have
connected to) have no webhooks configured, Stripe waits one hour after
creation to finalize the invoice.

If your invoice is configured to be billed by sending an email, then based on your
[email settings](https://dashboard.stripe.com/account/billing/automatic),
Stripe will email the invoice to your customer and await payment. These
emails can contain a link to a hosted page to pay the invoice.

Stripe applies any customer credit on the account before determining the
amount due for the invoice (i.e., the amount that will be actually
charged). If the amount due for the invoice is less than Stripe's [minimum allowed charge
per currency](/docs/currencies#minimum-and-maximum-charge-amounts), the
invoice is automatically marked paid, and we add the amount due to the
customer's credit balance which is applied to the next invoice.

More details on the customer's credit balance are
[here](https://stripe.com/docs/billing/customer/balance).

Related guide: [Send invoices to customers](https://stripe.com/docs/billing/invoices/sending)
 */
export interface Invoice {
  /**
   * The country of the business associated with this invoice, most often the business creating the invoice.
   */
  accountCountry?: string;
  /**
   * The public name of the business associated with this invoice, most often the business creating the invoice.
   */
  accountName?: string;
  /**
   * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
   */
  accountTaxIds?: Array<AccountTaxIdsItemUnion>;
  /**
   * Final amount due at this time for this invoice. If the invoice's total is smaller than the minimum charge amount, for example, or if there is account credit that can be applied to the invoice, the `amount_due` may be 0. If there is a positive `starting_balance` for the invoice (the customer owes money), the `amount_due` will also take that into account. The charge that gets generated for the invoice will be for the amount specified in `amount_due`.
   */
  amountDue: number;
  /**
   * Amount that was overpaid on the invoice. The amount overpaid is credited to the customer's credit balance.
   */
  amountOverpaid: number;
  /**
   * The amount, in cents (or local equivalent), that was paid.
   */
  amountPaid: number;
  /**
   * The difference between amount_due and amount_paid, in cents (or local equivalent).
   */
  amountRemaining: number;
  /**
   * This is the sum of all the shipping amounts.
   */
  amountShipping: number;
  /**
   * ID of the Connect Application that created the invoice.
   */
  application?: ApplicationUnion;
  /**
   * Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. Any payment attempt counts as the first attempt, and subsequently only automatic retries increment the attempt count. In other words, manual payment attempts after the first attempt do not affect the retry schedule. If a failure is returned with a non-retryable return code, the invoice can no longer be retried unless a new payment method is obtained. Retries will continue to be scheduled, and attempt_count will continue to increment, but retries will only be executed if a new payment method is obtained.
   */
  attemptCount: number;
  /**
   * Whether an attempt has been made to pay the invoice. An invoice is not attempted until 1 hour after the `invoice.created` webhook, for example, so you might not want to display that invoice as unpaid to your users.
   */
  attempted: boolean;
  /**
   * Controls whether Stripe performs [automatic collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection) of the invoice. If `false`, the invoice's state doesn't automatically advance without an explicit action.
   */
  autoAdvance: boolean;
  /**
   * AutomaticTax
   *
   * 
   */
  automaticTax: AutomaticTax;
  /**
   * The time when this invoice is currently scheduled to be automatically finalized. The field will be `null` if the invoice is not scheduled to finalize in the future. If the invoice is not in the draft state, this field will always be `null` - see `finalized_at` for the time when an already-finalized invoice was finalized.
   */
  automaticallyFinalizesAt?: number;
  /**
   * Indicates the reason why the invoice was created.

* `manual`: Unrelated to a subscription, for example, created via the invoice editor.
* `subscription`: No longer in use. Applies to subscriptions from before May 2018 where no distinction was made between updates, cycles, and thresholds.
* `subscription_create`: A new subscription was created.
* `subscription_cycle`: A subscription advanced into a new period.
* `subscription_threshold`: A subscription reached a billing threshold.
* `subscription_update`: A subscription was updated.
* `upcoming`: Reserved for upcoming invoices created through the Create Preview Invoice API or when an `invoice.upcoming` event is generated for an upcoming invoice on a subscription.
   */
  billingReason?: string;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions.
   */
  collectionMethod: string;
  /**
   * The confirmation secret associated with this invoice. Currently, this contains the client_secret of the PaymentIntent that Stripe creates during invoice finalization.
   */
  confirmationSecret?: InvoicesResourceConfirmationSecret;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Custom fields displayed on the invoice.
   */
  customFields?: Array<InvoiceSettingCustomField>;
  /**
   * The ID of the customer who will be billed.
   */
  customer: CustomerUnion;
  /**
   * The customer's address. Until the invoice is finalized, this field will equal `customer.address`. Once the invoice is finalized, this field will no longer be updated.
   */
  customerAddress?: Address;
  /**
   * The customer's email. Until the invoice is finalized, this field will equal `customer.email`. Once the invoice is finalized, this field will no longer be updated.
   */
  customerEmail?: string;
  /**
   * The customer's name. Until the invoice is finalized, this field will equal `customer.name`. Once the invoice is finalized, this field will no longer be updated.
   */
  customerName?: string;
  /**
   * The customer's phone number. Until the invoice is finalized, this field will equal `customer.phone`. Once the invoice is finalized, this field will no longer be updated.
   */
  customerPhone?: string;
  /**
   * The customer's shipping information. Until the invoice is finalized, this field will equal `customer.shipping`. Once the invoice is finalized, this field will no longer be updated.
   */
  customerShipping?: Shipping;
  /**
   * The customer's tax exempt status. Until the invoice is finalized, this field will equal `customer.tax_exempt`. Once the invoice is finalized, this field will no longer be updated.
   */
  customerTaxExempt?: string;
  /**
   * The customer's tax IDs. Until the invoice is finalized, this field will contain the same tax IDs as `customer.tax_ids`. Once the invoice is finalized, this field will no longer be updated.
   */
  customerTaxIds?: Array<InvoicesResourceInvoiceTaxId>;
  /**
   * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
   */
  defaultPaymentMethod?: DefaultPaymentMethodOrRef;
  /**
   * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
   */
  defaultSource?: DefaultSourceUnion;
  /**
   * The tax rates applied to this invoice, if any.
   */
  defaultTaxRates: Array<TaxRate>;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
   */
  description?: string;
  /**
   * The discounts applied to the invoice. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
   */
  discounts: Array<DiscountsItemUnion>;
  /**
   * The date on which payment for this invoice is due. This value will be `null` for invoices where `collection_method=charge_automatically`.
   */
  dueDate?: number;
  /**
   * The date when this invoice is in effect. Same as `finalized_at` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the invoice PDF and receipt.
   */
  effectiveAt?: number;
  /**
   * Ending customer balance after the invoice is finalized. Invoices are finalized approximately an hour after successful webhook delivery or when payment collection is attempted for the invoice. If the invoice has not been finalized yet, this will be null.
   */
  endingBalance?: number;
  /**
   * Footer displayed on the invoice.
   */
  footer?: string;
  /**
   * Details of the invoice that was cloned. See the [revision documentation](https://stripe.com/docs/invoicing/invoice-revisions) for more details.
   */
  fromInvoice?: InvoicesResourceFromInvoice;
  /**
   * The URL for the hosted invoice page, which allows customers to view and pay an invoice. If the invoice has not been finalized yet, this will be null.
   */
  hostedInvoiceUrl?: string;
  /**
   * Unique identifier for the object. For preview invoices created using the [create preview](https://stripe.com/docs/api/invoices/create_preview) endpoint, this id will be prefixed with `upcoming_in`.
   */
  id: string;
  /**
   * The link to download the PDF for the invoice. If the invoice has not been finalized yet, this will be null.
   */
  invoicePdf?: string;
  /**
   * ConnectAccountReference
   *
   * 
   */
  issuer: ConnectAccountReference;
  /**
   * The error encountered during the previous attempt to finalize the invoice. This field is cleared when the invoice is successfully finalized.
   */
  lastFinalizationError?: ApiErrors;
  /**
   * The ID of the most recent non-draft revision of this invoice
   */
  latestRevision?: LatestRevisionOrRef;
  /**
   * InvoiceLinesList
   *
   * The individual line items that make up the invoice. `lines` is sorted as follows: (1) pending invoice items (including prorations) in reverse chronological order, (2) subscription items in reverse chronological order, and (3) invoice items added after invoice creation in chronological order.
   */
  lines: LinesProperty2;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * The time at which payment will next be attempted. This value will be `null` for invoices where `collection_method=send_invoice`.
   */
  nextPaymentAttempt?: number;
  /**
   * A unique, identifying string that appears on emails sent to the customer for this invoice. This starts with the customer's unique invoice_prefix if it is specified.
   */
  number?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
   */
  onBehalfOf?: OnBehalfOfOrRef;
  /**
   * The parent that generated this invoice
   */
  parent?: BillingBillResourceInvoicingParentsInvoiceParent;
  /**
   * InvoicesPaymentSettings
   *
   * 
   */
  paymentSettings: InvoicesPaymentSettings;
  /**
   * InvoicesPaymentsListInvoicePayments
   *
   * Payments for this invoice
   */
  payments?: PaymentsProperty;
  /**
   * End of the usage period during which invoice items were added to this invoice. This looks back one period for a subscription invoice. Use the [line item period](/api/invoices/line_item#invoice_line_item_object-period) to get the service period for each price.
   */
  periodEnd: number;
  /**
   * Start of the usage period during which invoice items were added to this invoice. This looks back one period for a subscription invoice. Use the [line item period](/api/invoices/line_item#invoice_line_item_object-period) to get the service period for each price.
   */
  periodStart: number;
  /**
   * Total amount of all post-payment credit notes issued for this invoice.
   */
  postPaymentCreditNotesAmount: number;
  /**
   * Total amount of all pre-payment credit notes issued for this invoice.
   */
  prePaymentCreditNotesAmount: number;
  /**
   * This is the transaction number that appears on email receipts sent for this invoice.
   */
  receiptNumber?: string;
  /**
   * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
   */
  rendering?: InvoicesResourceInvoiceRendering;
  /**
   * The details of the cost of shipping, including the ShippingRate applied on the invoice.
   */
  shippingCost?: InvoicesResourceShippingCost;
  /**
   * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
   */
  shippingDetails?: Shipping;
  /**
   * Starting customer balance before the invoice is finalized. If the invoice has not been finalized yet, this will be the current customer balance. For revision invoices, this also includes any customer balance that was applied to the original invoice.
   */
  startingBalance: number;
  /**
   * Extra information about an invoice for the customer's credit card statement.
   */
  statementDescriptor?: string;
  /**
   * The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
   */
  status?: string;
  /**
   * InvoicesResourceStatusTransitions
   *
   * 
   */
  statusTransitions: InvoicesResourceStatusTransitions;
  /**
   * Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. Item discounts are already incorporated
   */
  subtotal: number;
  /**
   * The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. Item discounts are already incorporated
   */
  subtotalExcludingTax?: number;
  /**
   * ID of the test clock this invoice belongs to.
   */
  testClock?: TestClockOrRef;
  /**
   * InvoiceThresholdReason
   *
   * 
   */
  thresholdReason?: InvoiceThresholdReason;
  /**
   * Total after discounts and taxes.
   */
  total: number;
  /**
   * The aggregate amounts calculated per discount across all line items.
   */
  totalDiscountAmounts?: Array<DiscountsResourceDiscountAmount>;
  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax.
   */
  totalExcludingTax?: number;
  /**
   * Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. This is a combined list of total_pretax_credit_amounts across all invoice line items.
   */
  totalPretaxCreditAmounts?: Array<InvoicesResourcePretaxCreditAmount>;
  /**
   * The aggregate tax information of all line items.
   */
  totalTaxes?: Array<BillingBillResourceInvoicingTaxesTax>;
  /**
   * Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://stripe.com/docs/billing/webhooks#understand). This field tracks the time when webhooks for this invoice were successfully delivered. If the invoice had no webhooks to deliver, this will be set while the invoice is being created.
   */
  webhooksDeliveredAt?: number;
}

export const InvoiceSchema: TypedSchema<Invoice> = typed<Invoice>(object({
  accountCountry: optional(string()),
  accountName: optional(string()),
  get accountTaxIds() { return optional(array(AccountTaxIdsItemUnionSchema)) },
  amountDue: number(),
  amountOverpaid: number(),
  amountPaid: number(),
  amountRemaining: number(),
  amountShipping: number(),
  get application() { return optional(ApplicationUnionSchema) },
  attemptCount: number(),
  attempted: boolean(),
  autoAdvance: boolean(),
  automaticTax: AutomaticTaxSchema,
  automaticallyFinalizesAt: optional(number()),
  billingReason: optional(string()),
  collectionMethod: string(),
  get confirmationSecret() { return optional(InvoicesResourceConfirmationSecretSchema) },
  created: number(),
  currency: string(),
  get customFields() { return optional(array(InvoiceSettingCustomFieldSchema)) },
  customer: CustomerUnionSchema,
  get customerAddress() { return optional(AddressSchema) },
  customerEmail: optional(string()),
  customerName: optional(string()),
  customerPhone: optional(string()),
  get customerShipping() { return optional(ShippingSchema) },
  customerTaxExempt: optional(string()),
  get customerTaxIds() { return optional(array(InvoicesResourceInvoiceTaxIdSchema)) },
  get defaultPaymentMethod() { return optional(DefaultPaymentMethodOrRefSchema) },
  get defaultSource() { return optional(DefaultSourceUnionSchema) },
  defaultTaxRates: array(TaxRateSchema),
  description: optional(string()),
  discounts: array(DiscountsItemUnionSchema),
  dueDate: optional(number()),
  effectiveAt: optional(number()),
  endingBalance: optional(number()),
  footer: optional(string()),
  get fromInvoice() { return optional(InvoicesResourceFromInvoiceSchema) },
  hostedInvoiceUrl: optional(string()),
  id: string(),
  invoicePdf: optional(string()),
  issuer: ConnectAccountReferenceSchema,
  get lastFinalizationError() { return optional(ApiErrorsSchema) },
  get latestRevision() { return optional(LatestRevisionOrRefSchema) },
  lines: LinesProperty2Schema,
  livemode: boolean(),
  get metadata() { return optional(MetadataPropertySchema) },
  nextPaymentAttempt: optional(number()),
  number: optional(string()),
  object: string(),
  get onBehalfOf() { return optional(OnBehalfOfOrRefSchema) },
  get parent() { return optional(BillingBillResourceInvoicingParentsInvoiceParentSchema) },
  paymentSettings: InvoicesPaymentSettingsSchema,
  get payments() { return optional(PaymentsPropertySchema) },
  periodEnd: number(),
  periodStart: number(),
  postPaymentCreditNotesAmount: number(),
  prePaymentCreditNotesAmount: number(),
  receiptNumber: optional(string()),
  get rendering() { return optional(InvoicesResourceInvoiceRenderingSchema) },
  get shippingCost() { return optional(InvoicesResourceShippingCostSchema) },
  get shippingDetails() { return optional(ShippingSchema) },
  startingBalance: number(),
  statementDescriptor: optional(string()),
  status: optional(string()),
  statusTransitions: InvoicesResourceStatusTransitionsSchema,
  subtotal: number(),
  subtotalExcludingTax: optional(number()),
  get testClock() { return optional(TestClockOrRefSchema) },
  get thresholdReason() { return optional(InvoiceThresholdReasonSchema) },
  total: number(),
  get totalDiscountAmounts() { return optional(array(DiscountsResourceDiscountAmountSchema)) },
  totalExcludingTax: optional(number()),
  get totalPretaxCreditAmounts() { return optional(array(InvoicesResourcePretaxCreditAmountSchema)) },
  get totalTaxes() { return optional(array(BillingBillResourceInvoicingTaxesTaxSchema)) },
  webhooksDeliveredAt: optional(number()),
}));