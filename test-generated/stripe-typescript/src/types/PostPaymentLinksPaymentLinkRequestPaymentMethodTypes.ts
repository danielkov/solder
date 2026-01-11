import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostPaymentLinksPaymentLinkRequestPaymentMethodTypes = Array<string> | string;

export const PostPaymentLinksPaymentLinkRequestPaymentMethodTypesSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestPaymentMethodTypes> = typed<PostPaymentLinksPaymentLinkRequestPaymentMethodTypes>(union(array(string()), string()));