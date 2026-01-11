import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostChargesRequestCard } from './PostChargesRequestCard';
import { PostChargesRequestCardSchema } from './PostChargesRequestCard';
import type { PostChargesRequestDestination } from './PostChargesRequestDestination';
import { PostChargesRequestDestinationSchema } from './PostChargesRequestDestination';
import type { PostChargesRequestRadarOptions } from './PostChargesRequestRadarOptions';
import { PostChargesRequestRadarOptionsSchema } from './PostChargesRequestRadarOptions';
import type { PostChargesRequestShipping } from './PostChargesRequestShipping';
import { PostChargesRequestShippingSchema } from './PostChargesRequestShipping';
import type { PostChargesRequestTransferData } from './PostChargesRequestTransferData';
import { PostChargesRequestTransferDataSchema } from './PostChargesRequestTransferData';
export interface PostChargesRequest {
  /**
   * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
   */
  amount?: number;
  applicationFee?: number;
  /**
   * A fee in cents (or local equivalent) that will be applied to the charge and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the `Stripe-Account` header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/connect/direct-charges#collect-fees).
   */
  applicationFeeAmount?: number;
  /**
   * Whether to immediately capture the charge. Defaults to `true`. When `false`, the charge issues an authorization (or pre-authorization), and will need to be [captured](https://stripe.com/docs/api#capture_charge) later. Uncaptured charges expire after a set number of days (7 by default). For more information, see the [authorizing charges and settling later](https://stripe.com/docs/charges/placing-a-hold) documentation.
   */
  capture?: boolean;
  /**
   * A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js).
   */
  card?: PostChargesRequestCard;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;
  /**
   * The ID of an existing customer that will be charged in this request.
   */
  customer?: string;
  /**
   * An arbitrary string which you can attach to a `Charge` object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
   */
  description?: string;
  destination?: PostChargesRequestDestination;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * The Stripe account ID for which these funds are intended. Automatically set if you use the `destination` parameter. For details, see [Creating Separate Charges and Transfers](https://stripe.com/docs/connect/separate-charges-and-transfers#settlement-merchant).
   */
  onBehalfOf?: string;
  /**
   * radar_options_with_hidden_options
   *
   * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
   */
  radarOptions?: PostChargesRequestRadarOptions;
  /**
   * The email address to which this charge's [receipt](https://stripe.com/docs/dashboard/receipts) will be sent. The receipt will not be sent until the charge is paid, and no receipts will be sent for test mode charges. If this charge is for a [Customer](https://stripe.com/docs/api/customers/object), the email address specified here will override the customer's email address. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
   */
  receiptEmail?: string;
  /**
   * optional_fields_shipping
   *
   * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
   */
  shipping?: PostChargesRequestShipping;
  /**
   * A payment source to be charged. This can be the ID of a [card](https://stripe.com/docs/api#cards) (i.e., credit or debit card), a [bank account](https://stripe.com/docs/api#bank_accounts), a [source](https://stripe.com/docs/api#sources), a [token](https://stripe.com/docs/api#tokens), or a [connected account](https://stripe.com/docs/connect/account-debits#charging-a-connected-account). For certain sources---namely, [cards](https://stripe.com/docs/api#cards), [bank accounts](https://stripe.com/docs/api#bank_accounts), and attached [sources](https://stripe.com/docs/api#sources)---you must also pass the ID of the associated customer.
   */
  source?: string;
  /**
   * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).

For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
   */
  statementDescriptor?: string;
  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
   */
  statementDescriptorSuffix?: string;
  /**
   * transfer_data_specs
   *
   * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
   */
  transferData?: PostChargesRequestTransferData;
  /**
   * A string that identifies this transaction as part of a group. For details, see [Grouping transactions](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options).
   */
  transferGroup?: string;
}

export const PostChargesRequestSchema: TypedSchema<PostChargesRequest> = typed<PostChargesRequest>(object({
  amount: optional(number()),
  applicationFee: optional(number()),
  applicationFeeAmount: optional(number()),
  capture: optional(boolean()),
  get card() { return optional(PostChargesRequestCardSchema) },
  currency: optional(string()),
  customer: optional(string()),
  description: optional(string()),
  get destination() { return optional(PostChargesRequestDestinationSchema) },
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  onBehalfOf: optional(string()),
  get radarOptions() { return optional(PostChargesRequestRadarOptionsSchema) },
  receiptEmail: optional(string()),
  get shipping() { return optional(PostChargesRequestShippingSchema) },
  source: optional(string()),
  statementDescriptor: optional(string()),
  statementDescriptorSuffix: optional(string()),
  get transferData() { return optional(PostChargesRequestTransferDataSchema) },
  transferGroup: optional(string()),
}));