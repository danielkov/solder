import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadata } from './PostAccountsRequestMetadata';
import { PostAccountsRequestMetadataSchema } from './PostAccountsRequestMetadata';
export interface PostPaymentRecordsIdReportPaymentAttemptGuaranteedRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * When the reported payment was guaranteed. Measured in seconds since the Unix epoch.
   */
  guaranteedAt: number;
  metadata?: PostAccountsRequestMetadata;
}

export const PostPaymentRecordsIdReportPaymentAttemptGuaranteedRequestSchema: TypedSchema<PostPaymentRecordsIdReportPaymentAttemptGuaranteedRequest> = typed<PostPaymentRecordsIdReportPaymentAttemptGuaranteedRequest>(object({
  expand: optional(array(string())),
  guaranteedAt: number(),
  get metadata() { return optional(PostAccountsRequestMetadataSchema) },
}));