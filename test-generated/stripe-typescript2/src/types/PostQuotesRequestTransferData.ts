import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostQuotesRequestTransferDataObject } from './PostQuotesRequestTransferDataObject';
import { PostQuotesRequestTransferDataObjectSchema } from './PostQuotesRequestTransferDataObject';
/**
 * The data with which to automatically create a Transfer for each of the invoices.
 */
export type PostQuotesRequestTransferData = PostQuotesRequestTransferDataObject | string;

export const PostQuotesRequestTransferDataSchema: TypedSchema<PostQuotesRequestTransferData> = typed<PostQuotesRequestTransferData>(union(PostQuotesRequestTransferDataObjectSchema, string()));
