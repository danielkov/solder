import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject } from './PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject';
import { PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectSchema } from './PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject';
export type PostInvoicesInvoiceLinesLineItemIdRequestTaxAmounts = Array<PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject> | string;

export const PostInvoicesInvoiceLinesLineItemIdRequestTaxAmountsSchema: TypedSchema<PostInvoicesInvoiceLinesLineItemIdRequestTaxAmounts> = typed<PostInvoicesInvoiceLinesLineItemIdRequestTaxAmounts>(union(array(PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectSchema), string()));