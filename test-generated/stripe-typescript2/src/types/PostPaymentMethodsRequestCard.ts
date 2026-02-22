import { typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentMethodsRequestCardObject } from './DefaultPostPaymentMethodsRequestCardObject';
import { DefaultPostPaymentMethodsRequestCardObjectSchema } from './DefaultPostPaymentMethodsRequestCardObject';
import type { PostPaymentMethodsRequestCardObject } from './PostPaymentMethodsRequestCardObject';
import { PostPaymentMethodsRequestCardObjectSchema } from './PostPaymentMethodsRequestCardObject';
/**
 * If this is a `card` PaymentMethod, this hash contains the user's card details. For backwards compatibility, you can alternatively provide a Stripe token (e.g., for Apple Pay, Amex Express Checkout, or legacy Checkout) into the card hash with format `card: {token: "tok_visa"}`. When providing a card number, you must meet the requirements for [PCI compliance](https://stripe.com/docs/security#validating-pci-compliance). We strongly recommend using Stripe.js instead of interacting with this API directly.
 */
export type PostPaymentMethodsRequestCard = PostPaymentMethodsRequestCardObject | DefaultPostPaymentMethodsRequestCardObject;

export const PostPaymentMethodsRequestCardSchema: TypedSchema<PostPaymentMethodsRequestCard> = typed<PostPaymentMethodsRequestCard>(union(PostPaymentMethodsRequestCardObjectSchema, DefaultPostPaymentMethodsRequestCardObjectSchema));
