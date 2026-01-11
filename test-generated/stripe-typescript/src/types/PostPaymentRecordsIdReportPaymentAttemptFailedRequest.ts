import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadata } from './PostAccountsRequestMetadata';
import { PostAccountsRequestMetadataSchema } from './PostAccountsRequestMetadata';
export interface PostPaymentRecordsIdReportPaymentAttemptFailedRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * When the reported payment failed. Measured in seconds since the Unix epoch.
   */
  failedAt: number;
  metadata?: PostAccountsRequestMetadata;
}

export const PostPaymentRecordsIdReportPaymentAttemptFailedRequestSchema: TypedSchema<PostPaymentRecordsIdReportPaymentAttemptFailedRequest> = typed<PostPaymentRecordsIdReportPaymentAttemptFailedRequest>(object({
  expand: optional(array(string())),
  failedAt: number(),
  get metadata() { return optional(PostAccountsRequestMetadataSchema) },
}));