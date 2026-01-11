import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostPaymentRecordsReportPaymentRequestAmountRequested } from './PostPaymentRecordsReportPaymentRequestAmountRequested';
import { PostPaymentRecordsReportPaymentRequestAmountRequestedSchema } from './PostPaymentRecordsReportPaymentRequestAmountRequested';
import type { PostPaymentRecordsReportPaymentRequestCustomerDetails } from './PostPaymentRecordsReportPaymentRequestCustomerDetails';
import { PostPaymentRecordsReportPaymentRequestCustomerDetailsSchema } from './PostPaymentRecordsReportPaymentRequestCustomerDetails';
import type { PostPaymentRecordsReportPaymentRequestFailed } from './PostPaymentRecordsReportPaymentRequestFailed';
import { PostPaymentRecordsReportPaymentRequestFailedSchema } from './PostPaymentRecordsReportPaymentRequestFailed';
import type { PostPaymentRecordsReportPaymentRequestGuaranteed } from './PostPaymentRecordsReportPaymentRequestGuaranteed';
import { PostPaymentRecordsReportPaymentRequestGuaranteedSchema } from './PostPaymentRecordsReportPaymentRequestGuaranteed';
import type { PostPaymentRecordsReportPaymentRequestPaymentMethodDetails } from './PostPaymentRecordsReportPaymentRequestPaymentMethodDetails';
import { PostPaymentRecordsReportPaymentRequestPaymentMethodDetailsSchema } from './PostPaymentRecordsReportPaymentRequestPaymentMethodDetails';
import type { PostPaymentRecordsReportPaymentRequestProcessorDetails } from './PostPaymentRecordsReportPaymentRequestProcessorDetails';
import { PostPaymentRecordsReportPaymentRequestProcessorDetailsSchema } from './PostPaymentRecordsReportPaymentRequestProcessorDetails';
import type { PostPaymentRecordsReportPaymentRequestShippingDetails } from './PostPaymentRecordsReportPaymentRequestShippingDetails';
import { PostPaymentRecordsReportPaymentRequestShippingDetailsSchema } from './PostPaymentRecordsReportPaymentRequestShippingDetails';
export interface PostPaymentRecordsReportPaymentRequest {
  /**
   * amount
   *
   * The amount you initially requested for this payment.
   */
  amountRequested: PostPaymentRecordsReportPaymentRequestAmountRequested;
  /**
   * customer_details
   *
   * Customer information for this payment.
   */
  customerDetails?: PostPaymentRecordsReportPaymentRequestCustomerDetails;
  /**
   * Indicates whether the customer was present in your checkout flow during this payment.
   */
  customerPresence?: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * failed
   *
   * Information about the payment attempt failure.
   */
  failed?: PostPaymentRecordsReportPaymentRequestFailed;
  /**
   * guaranteed
   *
   * Information about the payment attempt guarantee.
   */
  guaranteed?: PostPaymentRecordsReportPaymentRequestGuaranteed;
  /**
   * When the reported payment was initiated. Measured in seconds since the Unix epoch.
   */
  initiatedAt: number;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * The outcome of the reported payment.
   */
  outcome?: string;
  /**
   * payment_method_details
   *
   * Information about the Payment Method debited for this payment.
   */
  paymentMethodDetails: PostPaymentRecordsReportPaymentRequestPaymentMethodDetails;
  /**
   * processor_details
   *
   * Processor information for this payment.
   */
  processorDetails?: PostPaymentRecordsReportPaymentRequestProcessorDetails;
  /**
   * shipping_details
   *
   * Shipping information for this payment.
   */
  shippingDetails?: PostPaymentRecordsReportPaymentRequestShippingDetails;
}

export const PostPaymentRecordsReportPaymentRequestSchema: TypedSchema<PostPaymentRecordsReportPaymentRequest> = typed<PostPaymentRecordsReportPaymentRequest>(object({
  amountRequested: PostPaymentRecordsReportPaymentRequestAmountRequestedSchema,
  get customerDetails() { return optional(PostPaymentRecordsReportPaymentRequestCustomerDetailsSchema) },
  customerPresence: optional(string()),
  description: optional(string()),
  expand: optional(array(string())),
  get failed() { return optional(PostPaymentRecordsReportPaymentRequestFailedSchema) },
  get guaranteed() { return optional(PostPaymentRecordsReportPaymentRequestGuaranteedSchema) },
  initiatedAt: number(),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  outcome: optional(string()),
  paymentMethodDetails: PostPaymentRecordsReportPaymentRequestPaymentMethodDetailsSchema,
  get processorDetails() { return optional(PostPaymentRecordsReportPaymentRequestProcessorDetailsSchema) },
  get shippingDetails() { return optional(PostPaymentRecordsReportPaymentRequestShippingDetailsSchema) },
}));