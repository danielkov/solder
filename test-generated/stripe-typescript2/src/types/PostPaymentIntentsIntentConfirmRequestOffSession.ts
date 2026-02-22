import { boolean, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Set to `true` to indicate that the customer isn't in your checkout flow during this payment attempt and can't authenticate. Use this parameter in scenarios where you collect card details and [charge them later](https://stripe.com/docs/payments/cards/charging-saved-cards).
 */
export type PostPaymentIntentsIntentConfirmRequestOffSession = boolean | string;

export const PostPaymentIntentsIntentConfirmRequestOffSessionSchema: TypedSchema<PostPaymentIntentsIntentConfirmRequestOffSession> = typed<PostPaymentIntentsIntentConfirmRequestOffSession>(union(boolean(), string()));
