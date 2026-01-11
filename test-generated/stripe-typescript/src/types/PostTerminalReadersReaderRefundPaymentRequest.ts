import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostTerminalReadersReaderRefundPaymentRequestRefundPaymentConfig } from './PostTerminalReadersReaderRefundPaymentRequestRefundPaymentConfig';
import { PostTerminalReadersReaderRefundPaymentRequestRefundPaymentConfigSchema } from './PostTerminalReadersReaderRefundPaymentRequestRefundPaymentConfig';
export interface PostTerminalReadersReaderRefundPaymentRequest {
  /**
   * A positive integer in __cents__ representing how much of this charge to refund.
   */
  amount?: number;
  /**
   * ID of the Charge to refund.
   */
  charge?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * ID of the PaymentIntent to refund.
   */
  paymentIntent?: string;
  /**
   * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
   */
  refundApplicationFee?: boolean;
  /**
   * refund_payment_config
   *
   * Configuration overrides for this refund, such as customer cancellation settings.
   */
  refundPaymentConfig?: PostTerminalReadersReaderRefundPaymentRequestRefundPaymentConfig;
  /**
   * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount). A transfer can be reversed only by the application that created the charge.
   */
  reverseTransfer?: boolean;
}

export const PostTerminalReadersReaderRefundPaymentRequestSchema: TypedSchema<PostTerminalReadersReaderRefundPaymentRequest> = typed<PostTerminalReadersReaderRefundPaymentRequest>(object({
  amount: optional(number()),
  charge: optional(string()),
  expand: optional(array(string())),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  paymentIntent: optional(string()),
  refundApplicationFee: optional(boolean()),
  get refundPaymentConfig() { return optional(PostTerminalReadersReaderRefundPaymentRequestRefundPaymentConfigSchema) },
  reverseTransfer: optional(boolean()),
}));