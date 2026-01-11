import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostPaymentIntentsIntentCaptureRequestPaymentDetails } from './PostPaymentIntentsIntentCaptureRequestPaymentDetails';
import { PostPaymentIntentsIntentCaptureRequestPaymentDetailsSchema } from './PostPaymentIntentsIntentCaptureRequestPaymentDetails';
import type { PostPaymentIntentsIntentCaptureRequestTransferData } from './PostPaymentIntentsIntentCaptureRequestTransferData';
import { PostPaymentIntentsIntentCaptureRequestTransferDataSchema } from './PostPaymentIntentsIntentCaptureRequestTransferData';
import type { PostPaymentIntentsRequestAmountDetails } from './PostPaymentIntentsRequestAmountDetails';
import { PostPaymentIntentsRequestAmountDetailsSchema } from './PostPaymentIntentsRequestAmountDetails';
import type { PostPaymentIntentsRequestHooks } from './PostPaymentIntentsRequestHooks';
import { PostPaymentIntentsRequestHooksSchema } from './PostPaymentIntentsRequestHooks';
export interface PostPaymentIntentsIntentCaptureRequest {
  /**
   * amount_details_param
   *
   * Provides industry-specific information about the amount.
   */
  amountDetails?: PostPaymentIntentsRequestAmountDetails;
  /**
   * The amount to capture from the PaymentIntent, which must be less than or equal to the original amount. Defaults to the full `amount_capturable` if it's not provided.
   */
  amountToCapture?: number;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  applicationFeeAmount?: number;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Defaults to `true`. When capturing a PaymentIntent, setting `final_capture` to `false` notifies Stripe to not release the remaining uncaptured funds to make sure that they're captured in future requests. You can only use this setting when [multicapture](https://stripe.com/docs/payments/multicapture) is available for PaymentIntents.
   */
  finalCapture?: boolean;
  /**
   * async_workflows_param
   *
   * Automations to be run during the PaymentIntent lifecycle
   */
  hooks?: PostPaymentIntentsRequestHooks;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * Provides industry-specific information about the charge.
   */
  paymentDetails?: PostPaymentIntentsIntentCaptureRequestPaymentDetails;
  /**
   * Text that appears on the customer's statement as the statement descriptor for a non-card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).

Setting this value for a card charge returns an error. For card charges, set the [statement_descriptor_suffix](https://docs.stripe.com/get-started/account/statement-descriptors#dynamic) instead.
   */
  statementDescriptor?: string;
  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement.
   */
  statementDescriptorSuffix?: string;
  /**
   * transfer_data_capture_params
   *
   * The parameters that you can use to automatically create a transfer after the payment
is captured. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  transferData?: PostPaymentIntentsIntentCaptureRequestTransferData;
}

export const PostPaymentIntentsIntentCaptureRequestSchema: TypedSchema<PostPaymentIntentsIntentCaptureRequest> = typed<PostPaymentIntentsIntentCaptureRequest>(object({
  get amountDetails() { return optional(PostPaymentIntentsRequestAmountDetailsSchema) },
  amountToCapture: optional(number()),
  applicationFeeAmount: optional(number()),
  expand: optional(array(string())),
  finalCapture: optional(boolean()),
  get hooks() { return optional(PostPaymentIntentsRequestHooksSchema) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get paymentDetails() { return optional(PostPaymentIntentsIntentCaptureRequestPaymentDetailsSchema) },
  statementDescriptor: optional(string()),
  statementDescriptorSuffix: optional(string()),
  get transferData() { return optional(PostPaymentIntentsIntentCaptureRequestTransferDataSchema) },
}));