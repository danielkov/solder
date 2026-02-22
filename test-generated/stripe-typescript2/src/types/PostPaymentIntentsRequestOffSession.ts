import { boolean, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Set to `true` to indicate that the customer isn't in your checkout flow during this payment attempt and can't authenticate. Use this parameter in scenarios where you collect card details and [charge them later](https://stripe.com/docs/payments/cards/charging-saved-cards). This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
 */
export type PostPaymentIntentsRequestOffSession = boolean | string;

export const PostPaymentIntentsRequestOffSessionSchema: TypedSchema<PostPaymentIntentsRequestOffSession> = typed<PostPaymentIntentsRequestOffSession>(union(boolean(), string()));
