import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostInvoicesInvoiceRequestEffectiveAt = number | string;

export const PostInvoicesInvoiceRequestEffectiveAtSchema: TypedSchema<PostInvoicesInvoiceRequestEffectiveAt> = typed<PostInvoicesInvoiceRequestEffectiveAt>(union(number(), string()));