import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The custom message to be displayed to a customer when a payment link is no longer active.
 */
export type PostPaymentLinksPaymentLinkRequestInactiveMessage = string | string;

export const PostPaymentLinksPaymentLinkRequestInactiveMessageSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestInactiveMessage> = typed<PostPaymentLinksPaymentLinkRequestInactiveMessage>(union(string(), string()));
