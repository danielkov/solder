import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
 */
export type PostPaymentIntentsIntentRequestReceiptEmail = string | string;

export const PostPaymentIntentsIntentRequestReceiptEmailSchema: TypedSchema<PostPaymentIntentsIntentRequestReceiptEmail> = typed<PostPaymentIntentsIntentRequestReceiptEmail>(union(string(), string()));
