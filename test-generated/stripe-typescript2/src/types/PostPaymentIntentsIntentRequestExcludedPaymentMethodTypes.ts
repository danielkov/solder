import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The list of payment method types to exclude from use with this payment.
 */
export type PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes = Array<string> | string;

export const PostPaymentIntentsIntentRequestExcludedPaymentMethodTypesSchema: TypedSchema<PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes> = typed<PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes>(union(array(string()), string()));
