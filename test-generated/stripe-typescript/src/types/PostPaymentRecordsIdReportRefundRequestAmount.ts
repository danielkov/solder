import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * amount
 *
 * A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) representing how much of this payment to refund. Can refund only up to the remaining, unrefunded amount of the payment.
 */
export interface PostPaymentRecordsIdReportRefundRequestAmount {
  currency: string;
  value: number;
}

export const PostPaymentRecordsIdReportRefundRequestAmountSchema: TypedSchema<PostPaymentRecordsIdReportRefundRequestAmount> = typed<PostPaymentRecordsIdReportRefundRequestAmount>(object({
  currency: string(),
  value: number(),
}));