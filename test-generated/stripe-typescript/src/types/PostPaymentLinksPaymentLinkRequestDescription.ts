import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostPaymentLinksPaymentLinkRequestDescription = string | string;

export const PostPaymentLinksPaymentLinkRequestDescriptionSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestDescription> = typed<PostPaymentLinksPaymentLinkRequestDescription>(union(string(), string()));