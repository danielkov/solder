import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject } from './PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject';
import { PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectSchema } from './PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject';
export type PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmounts = Array<PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject> | string;

export const PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsSchema: TypedSchema<PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmounts> = typed<PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmounts>(union(array(PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectSchema), string()));