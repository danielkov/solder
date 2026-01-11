import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * guaranteed
 *
 * Information about the payment attempt guarantee.
 */
export interface PostPaymentRecordsReportPaymentRequestGuaranteed {
  guaranteedAt: number;
}

export const PostPaymentRecordsReportPaymentRequestGuaranteedSchema: TypedSchema<PostPaymentRecordsReportPaymentRequestGuaranteed> = typed<PostPaymentRecordsReportPaymentRequestGuaranteed>(object({
  guaranteedAt: number(),
}));