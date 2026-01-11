import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostQuotesRequestApplicationFeeAmount } from './PostQuotesRequestApplicationFeeAmount';
import { PostQuotesRequestApplicationFeeAmountSchema } from './PostQuotesRequestApplicationFeeAmount';
import type { PostQuotesRequestApplicationFeePercent } from './PostQuotesRequestApplicationFeePercent';
import { PostQuotesRequestApplicationFeePercentSchema } from './PostQuotesRequestApplicationFeePercent';
import type { PostQuotesRequestAutomaticTax } from './PostQuotesRequestAutomaticTax';
import { PostQuotesRequestAutomaticTaxSchema } from './PostQuotesRequestAutomaticTax';
import type { PostQuotesRequestDefaultTaxRates } from './PostQuotesRequestDefaultTaxRates';
import { PostQuotesRequestDefaultTaxRatesSchema } from './PostQuotesRequestDefaultTaxRates';
import type { PostQuotesRequestDescription } from './PostQuotesRequestDescription';
import { PostQuotesRequestDescriptionSchema } from './PostQuotesRequestDescription';
import type { PostQuotesRequestDiscounts } from './PostQuotesRequestDiscounts';
import { PostQuotesRequestDiscountsSchema } from './PostQuotesRequestDiscounts';
import type { PostQuotesRequestFooter } from './PostQuotesRequestFooter';
import { PostQuotesRequestFooterSchema } from './PostQuotesRequestFooter';
import type { PostQuotesRequestFromQuote } from './PostQuotesRequestFromQuote';
import { PostQuotesRequestFromQuoteSchema } from './PostQuotesRequestFromQuote';
import type { PostQuotesRequestHeader } from './PostQuotesRequestHeader';
import { PostQuotesRequestHeaderSchema } from './PostQuotesRequestHeader';
import type { PostQuotesRequestInvoiceSettings } from './PostQuotesRequestInvoiceSettings';
import { PostQuotesRequestInvoiceSettingsSchema } from './PostQuotesRequestInvoiceSettings';
import type { PostQuotesRequestLineItemsItem } from './PostQuotesRequestLineItemsItem';
import { PostQuotesRequestLineItemsItemSchema } from './PostQuotesRequestLineItemsItem';
import type { PostQuotesRequestOnBehalfOf } from './PostQuotesRequestOnBehalfOf';
import { PostQuotesRequestOnBehalfOfSchema } from './PostQuotesRequestOnBehalfOf';
import type { PostQuotesRequestSubscriptionData } from './PostQuotesRequestSubscriptionData';
import { PostQuotesRequestSubscriptionDataSchema } from './PostQuotesRequestSubscriptionData';
import type { PostQuotesRequestTransferData } from './PostQuotesRequestTransferData';
import { PostQuotesRequestTransferDataSchema } from './PostQuotesRequestTransferData';
export interface PostQuotesRequest {
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
   */
  applicationFeeAmount?: PostQuotesRequestApplicationFeeAmount;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
   */
  applicationFeePercent?: PostQuotesRequestApplicationFeePercent;
  /**
   * automatic_tax_param
   *
   * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
   */
  automaticTax?: PostQuotesRequestAutomaticTax;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or at invoice finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
   */
  collectionMethod?: string;
  /**
   * The customer for which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
   */
  customer?: string;
  /**
   * The tax rates that will apply to any line item that does not have `tax_rates` set.
   */
  defaultTaxRates?: PostQuotesRequestDefaultTaxRates;
  /**
   * A description that will be displayed on the quote PDF. If no value is passed, the default description configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  description?: PostQuotesRequestDescription;
  /**
   * The discounts applied to the quote.
   */
  discounts?: PostQuotesRequestDiscounts;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch. If no value is passed, the default expiration date configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  expiresAt?: number;
  /**
   * A footer that will be displayed on the quote PDF. If no value is passed, the default footer configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  footer?: PostQuotesRequestFooter;
  /**
   * from_quote_params
   *
   * Clone an existing quote. The new quote will be created in `status=draft`. When using this parameter, you cannot specify any other parameters except for `expires_at`.
   */
  fromQuote?: PostQuotesRequestFromQuote;
  /**
   * A header that will be displayed on the quote PDF. If no value is passed, the default header configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  header?: PostQuotesRequestHeader;
  /**
   * quote_param
   *
   * All invoices will be billed using the specified settings.
   */
  invoiceSettings?: PostQuotesRequestInvoiceSettings;
  /**
   * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
   */
  lineItems?: Array<PostQuotesRequestLineItemsItem>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The account on behalf of which to charge.
   */
  onBehalfOf?: PostQuotesRequestOnBehalfOf;
  /**
   * subscription_data_create_params
   *
   * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
   */
  subscriptionData?: PostQuotesRequestSubscriptionData;
  /**
   * ID of the test clock to attach to the quote.
   */
  testClock?: string;
  /**
   * The data with which to automatically create a Transfer for each of the invoices.
   */
  transferData?: PostQuotesRequestTransferData;
}

export const PostQuotesRequestSchema: TypedSchema<PostQuotesRequest> = typed<PostQuotesRequest>(object({
  get applicationFeeAmount() { return optional(PostQuotesRequestApplicationFeeAmountSchema) },
  get applicationFeePercent() { return optional(PostQuotesRequestApplicationFeePercentSchema) },
  get automaticTax() { return optional(PostQuotesRequestAutomaticTaxSchema) },
  collectionMethod: optional(string()),
  customer: optional(string()),
  get defaultTaxRates() { return optional(PostQuotesRequestDefaultTaxRatesSchema) },
  get description() { return optional(PostQuotesRequestDescriptionSchema) },
  get discounts() { return optional(PostQuotesRequestDiscountsSchema) },
  expand: optional(array(string())),
  expiresAt: optional(number()),
  get footer() { return optional(PostQuotesRequestFooterSchema) },
  get fromQuote() { return optional(PostQuotesRequestFromQuoteSchema) },
  get header() { return optional(PostQuotesRequestHeaderSchema) },
  get invoiceSettings() { return optional(PostQuotesRequestInvoiceSettingsSchema) },
  get lineItems() { return optional(array(PostQuotesRequestLineItemsItemSchema)) },
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  get onBehalfOf() { return optional(PostQuotesRequestOnBehalfOfSchema) },
  get subscriptionData() { return optional(PostQuotesRequestSubscriptionDataSchema) },
  testClock: optional(string()),
  get transferData() { return optional(PostQuotesRequestTransferDataSchema) },
}));