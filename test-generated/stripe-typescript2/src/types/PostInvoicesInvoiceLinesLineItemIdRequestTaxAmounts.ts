import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject } from './PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject';
import { PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectSchema } from './PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject';
/**
 * A list of up to 10 tax amounts for this line item. This can be useful if you calculate taxes on your own or use a third-party to calculate them. You cannot set tax amounts if any line item has [tax_rates](https://stripe.com/docs/api/invoices/line_item#invoice_line_item_object-tax_rates) or if the invoice has [default_tax_rates](https://stripe.com/docs/api/invoices/object#invoice_object-default_tax_rates) or uses [automatic tax](https://stripe.com/docs/tax/invoicing). Pass an empty string to remove previously defined tax amounts.
 */
export type PostInvoicesInvoiceLinesLineItemIdRequestTaxAmounts = Array<PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject> | string;

export const PostInvoicesInvoiceLinesLineItemIdRequestTaxAmountsSchema: TypedSchema<PostInvoicesInvoiceLinesLineItemIdRequestTaxAmounts> = typed<PostInvoicesInvoiceLinesLineItemIdRequestTaxAmounts>(union(array(PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectSchema), string()));
