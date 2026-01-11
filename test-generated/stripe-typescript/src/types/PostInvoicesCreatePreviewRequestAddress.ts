import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostChargesRequestAddress } from './PostChargesRequestAddress';
import { PostChargesRequestAddressSchema } from './PostChargesRequestAddress';
export type PostInvoicesCreatePreviewRequestAddress = PostChargesRequestAddress | string;

export const PostInvoicesCreatePreviewRequestAddressSchema: TypedSchema<PostInvoicesCreatePreviewRequestAddress> = typed<PostInvoicesCreatePreviewRequestAddress>(union(PostChargesRequestAddressSchema, string()));