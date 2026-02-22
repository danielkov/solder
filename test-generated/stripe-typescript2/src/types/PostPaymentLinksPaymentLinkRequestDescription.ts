import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type PostPaymentLinksPaymentLinkRequestDescription = string | string;

export const PostPaymentLinksPaymentLinkRequestDescriptionSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestDescription> = typed<PostPaymentLinksPaymentLinkRequestDescription>(union(string(), string()));
