import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * custom
 */
export interface PostPaymentRecordsIdReportRefundRequestCustom {
  refundReference: string;
}

export const PostPaymentRecordsIdReportRefundRequestCustomSchema: TypedSchema<PostPaymentRecordsIdReportRefundRequestCustom> = typed<PostPaymentRecordsIdReportRefundRequestCustom>(object({
  refundReference: string(),
}));