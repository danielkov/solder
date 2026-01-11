import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostPaymentRecordsIdReportRefundRequestAmount } from './PostPaymentRecordsIdReportRefundRequestAmount';
import { PostPaymentRecordsIdReportRefundRequestAmountSchema } from './PostPaymentRecordsIdReportRefundRequestAmount';
import type { PostPaymentRecordsIdReportRefundRequestProcessorDetails } from './PostPaymentRecordsIdReportRefundRequestProcessorDetails';
import { PostPaymentRecordsIdReportRefundRequestProcessorDetailsSchema } from './PostPaymentRecordsIdReportRefundRequestProcessorDetails';
import type { PostPaymentRecordsIdReportRefundRequestRefunded } from './PostPaymentRecordsIdReportRefundRequestRefunded';
import { PostPaymentRecordsIdReportRefundRequestRefundedSchema } from './PostPaymentRecordsIdReportRefundRequestRefunded';
export interface PostPaymentRecordsIdReportRefundRequest {
  /**
   * amount
   *
   * A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) representing how much of this payment to refund. Can refund only up to the remaining, unrefunded amount of the payment.
   */
  amount?: PostPaymentRecordsIdReportRefundRequestAmount;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * When the reported refund was initiated. Measured in seconds since the Unix epoch.
   */
  initiatedAt?: number;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * The outcome of the reported refund.
   */
  outcome: string;
  /**
   * processor_details
   *
   * Processor information for this refund.
   */
  processorDetails: PostPaymentRecordsIdReportRefundRequestProcessorDetails;
  /**
   * refunded
   *
   * Information about the payment attempt refund.
   */
  refunded: PostPaymentRecordsIdReportRefundRequestRefunded;
}

export const PostPaymentRecordsIdReportRefundRequestSchema: TypedSchema<PostPaymentRecordsIdReportRefundRequest> = typed<PostPaymentRecordsIdReportRefundRequest>(object({
  get amount() { return optional(PostPaymentRecordsIdReportRefundRequestAmountSchema) },
  expand: optional(array(string())),
  initiatedAt: optional(number()),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  outcome: string(),
  processorDetails: PostPaymentRecordsIdReportRefundRequestProcessorDetailsSchema,
  refunded: PostPaymentRecordsIdReportRefundRequestRefundedSchema,
}));