import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCustomersRequestAddressObject } from './PostCustomersRequestAddressObject';
import { PostCustomersRequestAddressObjectSchema } from './PostCustomersRequestAddressObject';
/**
 * The customer's address.
 */
export type PostCustomersRequestAddress = PostCustomersRequestAddressObject | string;

export const PostCustomersRequestAddressSchema: TypedSchema<PostCustomersRequestAddress> = typed<PostCustomersRequestAddress>(union(PostCustomersRequestAddressObjectSchema, string()));
