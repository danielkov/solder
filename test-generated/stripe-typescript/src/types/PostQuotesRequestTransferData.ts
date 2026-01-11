import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostQuotesRequestTransferDataObject } from './PostQuotesRequestTransferDataObject';
import { PostQuotesRequestTransferDataObjectSchema } from './PostQuotesRequestTransferDataObject';
export type PostQuotesRequestTransferData = PostQuotesRequestTransferDataObject | string;

export const PostQuotesRequestTransferDataSchema: TypedSchema<PostQuotesRequestTransferData> = typed<PostQuotesRequestTransferData>(union(PostQuotesRequestTransferDataObjectSchema, string()));