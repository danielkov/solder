import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostPaymentIntentsIntentIncrementAuthorizationRequestPaymentDetails } from './PostPaymentIntentsIntentIncrementAuthorizationRequestPaymentDetails';
import { PostPaymentIntentsIntentIncrementAuthorizationRequestPaymentDetailsSchema } from './PostPaymentIntentsIntentIncrementAuthorizationRequestPaymentDetails';
import type { PostPaymentIntentsIntentIncrementAuthorizationRequestTransferData } from './PostPaymentIntentsIntentIncrementAuthorizationRequestTransferData';
import { PostPaymentIntentsIntentIncrementAuthorizationRequestTransferDataSchema } from './PostPaymentIntentsIntentIncrementAuthorizationRequestTransferData';
import type { PostPaymentIntentsRequestAmountDetails } from './PostPaymentIntentsRequestAmountDetails';
import { PostPaymentIntentsRequestAmountDetailsSchema } from './PostPaymentIntentsRequestAmountDetails';
import type { PostPaymentIntentsRequestHooks } from './PostPaymentIntentsRequestHooks';
import { PostPaymentIntentsRequestHooksSchema } from './PostPaymentIntentsRequestHooks';
export interface PostPaymentIntentsIntentIncrementAuthorizationRequest {
  /**
   * The updated total amount that you intend to collect from the cardholder. This amount must be greater than the currently authorized amount.
   */
  amount: number;
  /**
   * amount_details_param
   *
   * Provides industry-specific information about the amount.
   */
  amountDetails?: PostPaymentIntentsRequestAmountDetails;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  applicationFeeAmount?: number;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * async_workflows_param
   *
   * Automations to be run during the PaymentIntent lifecycle
   */
  hooks?: PostPaymentIntentsRequestHooks;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * payment_details_order_customer_reference_param
   *
   * Provides industry-specific information about the charge.
   */
  paymentDetails?: PostPaymentIntentsIntentIncrementAuthorizationRequestPaymentDetails;
  /**
   * Text that appears on the customer's statement as the statement descriptor for a non-card or card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   */
  statementDescriptor?: string;
  /**
   * transfer_data_update_params
   *
   * The parameters used to automatically create a transfer after the payment is captured.
Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  transferData?: PostPaymentIntentsIntentIncrementAuthorizationRequestTransferData;
}

export const PostPaymentIntentsIntentIncrementAuthorizationRequestSchema: TypedSchema<PostPaymentIntentsIntentIncrementAuthorizationRequest> = typed<PostPaymentIntentsIntentIncrementAuthorizationRequest>(object({
  amount: number(),
  get amountDetails() { return optional(PostPaymentIntentsRequestAmountDetailsSchema) },
  applicationFeeAmount: optional(number()),
  description: optional(string()),
  expand: optional(array(string())),
  get hooks() { return optional(PostPaymentIntentsRequestHooksSchema) },
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  get paymentDetails() { return optional(PostPaymentIntentsIntentIncrementAuthorizationRequestPaymentDetailsSchema) },
  statementDescriptor: optional(string()),
  get transferData() { return optional(PostPaymentIntentsIntentIncrementAuthorizationRequestTransferDataSchema) },
}));