import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * amount
 *
 * The amount you initially requested for this payment.
 */
export interface PostPaymentRecordsReportPaymentRequestAmountRequested {
  currency: string;
  value: number;
}

export const PostPaymentRecordsReportPaymentRequestAmountRequestedSchema: TypedSchema<PostPaymentRecordsReportPaymentRequestAmountRequested> = typed<PostPaymentRecordsReportPaymentRequestAmountRequested>(object({
  currency: string(),
  value: number(),
}));