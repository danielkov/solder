import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
 */
export type PostProductsIdRequestDescription = string | string;

export const PostProductsIdRequestDescriptionSchema: TypedSchema<PostProductsIdRequestDescription> = typed<PostProductsIdRequestDescription>(union(string(), string()));
