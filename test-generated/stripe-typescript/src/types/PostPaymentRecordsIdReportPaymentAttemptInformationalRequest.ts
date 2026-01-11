import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescription } from './PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescription';
import { PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescriptionSchema } from './PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescription';
import type { PostPaymentRecordsIdReportPaymentAttemptInformationalRequestShippingDetails } from './PostPaymentRecordsIdReportPaymentAttemptInformationalRequestShippingDetails';
import { PostPaymentRecordsIdReportPaymentAttemptInformationalRequestShippingDetailsSchema } from './PostPaymentRecordsIdReportPaymentAttemptInformationalRequestShippingDetails';
import type { PostPaymentRecordsReportPaymentRequestCustomerDetails } from './PostPaymentRecordsReportPaymentRequestCustomerDetails';
import { PostPaymentRecordsReportPaymentRequestCustomerDetailsSchema } from './PostPaymentRecordsReportPaymentRequestCustomerDetails';
export interface PostPaymentRecordsIdReportPaymentAttemptInformationalRequest {
  /**
   * customer_details
   *
   * Customer information for this payment.
   */
  customerDetails?: PostPaymentRecordsReportPaymentRequestCustomerDetails;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescription;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * Shipping information for this payment.
   */
  shippingDetails?: PostPaymentRecordsIdReportPaymentAttemptInformationalRequestShippingDetails;
}

export const PostPaymentRecordsIdReportPaymentAttemptInformationalRequestSchema: TypedSchema<PostPaymentRecordsIdReportPaymentAttemptInformationalRequest> = typed<PostPaymentRecordsIdReportPaymentAttemptInformationalRequest>(object({
  get customerDetails() { return optional(PostPaymentRecordsReportPaymentRequestCustomerDetailsSchema) },
  get description() { return optional(PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescriptionSchema) },
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get shippingDetails() { return optional(PostPaymentRecordsIdReportPaymentAttemptInformationalRequestShippingDetailsSchema) },
}));