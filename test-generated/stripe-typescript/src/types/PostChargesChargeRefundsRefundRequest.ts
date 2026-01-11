import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadata } from './PostAccountsRequestMetadata';
import { PostAccountsRequestMetadataSchema } from './PostAccountsRequestMetadata';
export interface PostChargesChargeRefundsRefundRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  metadata?: PostAccountsRequestMetadata;
}

export const PostChargesChargeRefundsRefundRequestSchema: TypedSchema<PostChargesChargeRefundsRefundRequest> = typed<PostChargesChargeRefundsRefundRequest>(object({
  expand: optional(array(string())),
  get metadata() { return optional(PostAccountsRequestMetadataSchema) },
}));