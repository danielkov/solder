import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostPaymentRecordsReportPaymentRequestFailed } from './PostPaymentRecordsReportPaymentRequestFailed';
import { PostPaymentRecordsReportPaymentRequestFailedSchema } from './PostPaymentRecordsReportPaymentRequestFailed';
import type { PostPaymentRecordsReportPaymentRequestGuaranteed } from './PostPaymentRecordsReportPaymentRequestGuaranteed';
import { PostPaymentRecordsReportPaymentRequestGuaranteedSchema } from './PostPaymentRecordsReportPaymentRequestGuaranteed';
import type { PostPaymentRecordsReportPaymentRequestPaymentMethodDetails } from './PostPaymentRecordsReportPaymentRequestPaymentMethodDetails';
import { PostPaymentRecordsReportPaymentRequestPaymentMethodDetailsSchema } from './PostPaymentRecordsReportPaymentRequestPaymentMethodDetails';
import type { PostPaymentRecordsReportPaymentRequestShippingDetails } from './PostPaymentRecordsReportPaymentRequestShippingDetails';
import { PostPaymentRecordsReportPaymentRequestShippingDetailsSchema } from './PostPaymentRecordsReportPaymentRequestShippingDetails';
export interface PostPaymentRecordsIdReportPaymentAttemptRequest {
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
  paymentMethodDetails?: PostPaymentRecordsReportPaymentRequestPaymentMethodDetails;
  /**
   * shipping_details
   *
   * Shipping information for this payment.
   */
  shippingDetails?: PostPaymentRecordsReportPaymentRequestShippingDetails;
}

export const PostPaymentRecordsIdReportPaymentAttemptRequestSchema: TypedSchema<PostPaymentRecordsIdReportPaymentAttemptRequest> = typed<PostPaymentRecordsIdReportPaymentAttemptRequest>(object({
  description: optional(string()),
  expand: optional(array(string())),
  get failed() { return optional(PostPaymentRecordsReportPaymentRequestFailedSchema) },
  get guaranteed() { return optional(PostPaymentRecordsReportPaymentRequestGuaranteedSchema) },
  initiatedAt: number(),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  outcome: optional(string()),
  get paymentMethodDetails() { return optional(PostPaymentRecordsReportPaymentRequestPaymentMethodDetailsSchema) },
  get shippingDetails() { return optional(PostPaymentRecordsReportPaymentRequestShippingDetailsSchema) },
}));