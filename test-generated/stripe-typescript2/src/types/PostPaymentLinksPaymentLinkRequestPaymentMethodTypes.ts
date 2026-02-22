import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The list of payment method types that customers can use. Pass an empty string to enable dynamic payment methods that use your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
 */
export type PostPaymentLinksPaymentLinkRequestPaymentMethodTypes = Array<string> | string;

export const PostPaymentLinksPaymentLinkRequestPaymentMethodTypesSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestPaymentMethodTypes> = typed<PostPaymentLinksPaymentLinkRequestPaymentMethodTypes>(union(array(string()), string()));
