import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * custom
 */
export interface PostPaymentRecordsReportPaymentRequestCustom {
  displayName?: string;
  type?: string;
}

export const PostPaymentRecordsReportPaymentRequestCustomSchema: TypedSchema<PostPaymentRecordsReportPaymentRequestCustom> = typed<PostPaymentRecordsReportPaymentRequestCustom>(object({
  displayName: optional(string()),
  type: optional(string()),
}));