import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. Metadata associated with this Payment Link will automatically be copied to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
 */
export interface PostPaymentLinksRequestMetadata {
}

export const PostPaymentLinksRequestMetadataSchema: TypedSchema<PostPaymentLinksRequestMetadata> = typed<PostPaymentLinksRequestMetadata>(object({
}));