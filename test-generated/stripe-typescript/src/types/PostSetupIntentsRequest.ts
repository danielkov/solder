import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostSetupIntentsRequestAutomaticPaymentMethods } from './PostSetupIntentsRequestAutomaticPaymentMethods';
import { PostSetupIntentsRequestAutomaticPaymentMethodsSchema } from './PostSetupIntentsRequestAutomaticPaymentMethods';
import type { PostSetupIntentsRequestMandateData } from './PostSetupIntentsRequestMandateData';
import { PostSetupIntentsRequestMandateDataSchema } from './PostSetupIntentsRequestMandateData';
import type { PostSetupIntentsRequestPaymentMethodData } from './PostSetupIntentsRequestPaymentMethodData';
import { PostSetupIntentsRequestPaymentMethodDataSchema } from './PostSetupIntentsRequestPaymentMethodData';
import type { PostSetupIntentsRequestPaymentMethodOptions } from './PostSetupIntentsRequestPaymentMethodOptions';
import { PostSetupIntentsRequestPaymentMethodOptionsSchema } from './PostSetupIntentsRequestPaymentMethodOptions';
import type { PostSetupIntentsRequestSingleUse } from './PostSetupIntentsRequestSingleUse';
import { PostSetupIntentsRequestSingleUseSchema } from './PostSetupIntentsRequestSingleUse';
export interface PostSetupIntentsRequest {
  /**
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.

It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attachToSelf?: boolean;
  /**
   * automatic_payment_methods_param
   *
   * When you enable this parameter, this SetupIntent accepts payment methods that you enable in the Dashboard and that are compatible with its other parameters.
   */
  automaticPaymentMethods?: PostSetupIntentsRequestAutomaticPaymentMethods;
  /**
   * Set to `true` to attempt to confirm this SetupIntent immediately. This parameter defaults to `false`. If a card is the attached payment method, you can provide a `return_url` in case further authentication is necessary.
   */
  confirm?: boolean;
  /**
   * ID of the ConfirmationToken used to confirm this SetupIntent.

If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
   */
  confirmationToken?: string;
  /**
   * ID of the Customer this SetupIntent belongs to, if one exists.

If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
   */
  customer?: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * The list of payment method types to exclude from use with this SetupIntent.
   */
  excludedPaymentMethodTypes?: Array<string>;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Indicates the directions of money movement for which this payment method is intended to be used.

Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
   */
  flowDirections?: Array<string>;
  /**
   * This hash contains details about the mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
   */
  mandateData?: PostSetupIntentsRequestMandateData;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The Stripe account ID created for this SetupIntent.
   */
  onBehalfOf?: string;
  /**
   * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
   */
  paymentMethod?: string;
  /**
   * The ID of the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) to use with this SetupIntent.
   */
  paymentMethodConfiguration?: string;
  /**
   * payment_method_data_params
   *
   * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
value in the SetupIntent.
   */
  paymentMethodData?: PostSetupIntentsRequestPaymentMethodData;
  /**
   * payment_method_options_param
   *
   * Payment method-specific configuration for this SetupIntent.
   */
  paymentMethodOptions?: PostSetupIntentsRequestPaymentMethodOptions;
  /**
   * The list of payment method types (for example, card) that this SetupIntent can use. If you don't provide this, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods). A list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
   */
  paymentMethodTypes?: Array<string>;
  /**
   * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. To redirect to a mobile application, you can alternatively supply an application URI scheme. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
   */
  returnUrl?: string;
  /**
   * setup_intent_single_use_params
   *
   * If you populate this hash, this SetupIntent generates a `single_use` mandate after successful completion.

Single-use mandates are only valid for the following payment methods: `acss_debit`, `alipay`, `au_becs_debit`, `bacs_debit`, `bancontact`, `boleto`, `ideal`, `link`, `sepa_debit`, and `us_bank_account`.
   */
  singleUse?: PostSetupIntentsRequestSingleUse;
  /**
   * Indicates how the payment method is intended to be used in the future. If not provided, this value defaults to `off_session`.
   */
  usage?: string;
  /**
   * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
   */
  useStripeSdk?: boolean;
}

export const PostSetupIntentsRequestSchema: TypedSchema<PostSetupIntentsRequest> = typed<PostSetupIntentsRequest>(object({
  attachToSelf: optional(boolean()),
  get automaticPaymentMethods() { return optional(PostSetupIntentsRequestAutomaticPaymentMethodsSchema) },
  confirm: optional(boolean()),
  confirmationToken: optional(string()),
  customer: optional(string()),
  description: optional(string()),
  excludedPaymentMethodTypes: optional(array(string())),
  expand: optional(array(string())),
  flowDirections: optional(array(string())),
  get mandateData() { return optional(PostSetupIntentsRequestMandateDataSchema) },
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  onBehalfOf: optional(string()),
  paymentMethod: optional(string()),
  paymentMethodConfiguration: optional(string()),
  get paymentMethodData() { return optional(PostSetupIntentsRequestPaymentMethodDataSchema) },
  get paymentMethodOptions() { return optional(PostSetupIntentsRequestPaymentMethodOptionsSchema) },
  paymentMethodTypes: optional(array(string())),
  returnUrl: optional(string()),
  get singleUse() { return optional(PostSetupIntentsRequestSingleUseSchema) },
  usage: optional(string()),
  useStripeSdk: optional(boolean()),
}));