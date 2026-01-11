import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
 */
export interface PostAccountsAccountBankAccountsRequestMetadata {
}

export const PostAccountsAccountBankAccountsRequestMetadataSchema: TypedSchema<PostAccountsAccountBankAccountsRequestMetadata> = typed<PostAccountsAccountBankAccountsRequestMetadata>(object({
}));