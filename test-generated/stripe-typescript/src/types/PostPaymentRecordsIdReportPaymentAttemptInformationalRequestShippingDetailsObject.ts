import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPaymentRecordsReportPaymentRequestAddress } from './PostPaymentRecordsReportPaymentRequestAddress';
import { PostPaymentRecordsReportPaymentRequestAddressSchema } from './PostPaymentRecordsReportPaymentRequestAddress';
/**
 * shipping_details
 */
export interface PostPaymentRecordsIdReportPaymentAttemptInformationalRequestShippingDetailsObject {
  /**
   * address
   */
  address?: PostPaymentRecordsReportPaymentRequestAddress;
  name?: string;
  phone?: string;
}

export const PostPaymentRecordsIdReportPaymentAttemptInformationalRequestShippingDetailsObjectSchema: TypedSchema<PostPaymentRecordsIdReportPaymentAttemptInformationalRequestShippingDetailsObject> = typed<PostPaymentRecordsIdReportPaymentAttemptInformationalRequestShippingDetailsObject>(object({
  get address() { return optional(PostPaymentRecordsReportPaymentRequestAddressSchema) },
  name: optional(string()),
  phone: optional(string()),
}));