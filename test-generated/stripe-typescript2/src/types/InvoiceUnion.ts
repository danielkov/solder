import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { DeletedInvoice } from './DeletedInvoice';
import { DeletedInvoiceSchema } from './DeletedInvoice';
import type { Invoice } from './Invoice';
import { InvoiceSchema } from './Invoice';
/**
 * The invoice that was paid.
 */
export type InvoiceUnion = string | Invoice | DeletedInvoice;

export const InvoiceUnionSchema: TypedSchema<InvoiceUnion> = typed<InvoiceUnion>(union(string(), InvoiceSchema, DeletedInvoiceSchema));
