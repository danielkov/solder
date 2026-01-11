import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostPaymentLinksPaymentLinkRequestInactiveMessage = string | string;

export const PostPaymentLinksPaymentLinkRequestInactiveMessageSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestInactiveMessage> = typed<PostPaymentLinksPaymentLinkRequestInactiveMessage>(union(string(), string()));