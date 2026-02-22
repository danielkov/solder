import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
 */
export type PostPaymentIntentsIntentRequestApplicationFeeAmount = number | string;

export const PostPaymentIntentsIntentRequestApplicationFeeAmountSchema: TypedSchema<PostPaymentIntentsIntentRequestApplicationFeeAmount> = typed<PostPaymentIntentsIntentRequestApplicationFeeAmount>(union(number(), string()));
