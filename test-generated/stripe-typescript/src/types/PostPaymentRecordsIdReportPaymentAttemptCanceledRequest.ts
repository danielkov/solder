import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadata } from './PostAccountsRequestMetadata';
import { PostAccountsRequestMetadataSchema } from './PostAccountsRequestMetadata';
export interface PostPaymentRecordsIdReportPaymentAttemptCanceledRequest {
  /**
   * When the reported payment was canceled. Measured in seconds since the Unix epoch.
   */
  canceledAt: number;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  metadata?: PostAccountsRequestMetadata;
}

export const PostPaymentRecordsIdReportPaymentAttemptCanceledRequestSchema: TypedSchema<PostPaymentRecordsIdReportPaymentAttemptCanceledRequest> = typed<PostPaymentRecordsIdReportPaymentAttemptCanceledRequest>(object({
  canceledAt: number(),
  expand: optional(array(string())),
  get metadata() { return optional(PostAccountsRequestMetadataSchema) },
}));