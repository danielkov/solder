import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostSetupIntentsIntentRequestExcludedPaymentMethodTypes } from './PostSetupIntentsIntentRequestExcludedPaymentMethodTypes';
import { PostSetupIntentsIntentRequestExcludedPaymentMethodTypesSchema } from './PostSetupIntentsIntentRequestExcludedPaymentMethodTypes';
import type { PostSetupIntentsRequestPaymentMethodData } from './PostSetupIntentsRequestPaymentMethodData';
import { PostSetupIntentsRequestPaymentMethodDataSchema } from './PostSetupIntentsRequestPaymentMethodData';
import type { PostSetupIntentsRequestPaymentMethodOptions } from './PostSetupIntentsRequestPaymentMethodOptions';
import { PostSetupIntentsRequestPaymentMethodOptionsSchema } from './PostSetupIntentsRequestPaymentMethodOptions';
export interface PostSetupIntentsIntentRequest {
  /**
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.

It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attachToSelf?: boolean;
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
  excludedPaymentMethodTypes?: PostSetupIntentsIntentRequestExcludedPaymentMethodTypes;
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
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent. To unset this field to null, pass in an empty string.
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
   * The list of payment method types (for example, card) that this SetupIntent can set up. If you don't provide this, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods). A list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
   */
  paymentMethodTypes?: Array<string>;
}

export const PostSetupIntentsIntentRequestSchema: TypedSchema<PostSetupIntentsIntentRequest> = typed<PostSetupIntentsIntentRequest>(object({
  attachToSelf: optional(boolean()),
  customer: optional(string()),
  description: optional(string()),
  get excludedPaymentMethodTypes() { return optional(PostSetupIntentsIntentRequestExcludedPaymentMethodTypesSchema) },
  expand: optional(array(string())),
  flowDirections: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  paymentMethod: optional(string()),
  paymentMethodConfiguration: optional(string()),
  get paymentMethodData() { return optional(PostSetupIntentsRequestPaymentMethodDataSchema) },
  get paymentMethodOptions() { return optional(PostSetupIntentsRequestPaymentMethodOptionsSchema) },
  paymentMethodTypes: optional(array(string())),
}));