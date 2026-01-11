import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCustomersRequestAddressObject } from './PostCustomersRequestAddressObject';
import { PostCustomersRequestAddressObjectSchema } from './PostCustomersRequestAddressObject';
export type PostCustomersRequestAddress = PostCustomersRequestAddressObject | string;

export const PostCustomersRequestAddressSchema: TypedSchema<PostCustomersRequestAddress> = typed<PostCustomersRequestAddress>(union(PostCustomersRequestAddressObjectSchema, string()));