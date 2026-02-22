import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Invoice } from './Invoice';
import { InvoiceSchema } from './Invoice';
/**
 * The invoice to which the reinstated billing credits were originally applied.
 */
export type InvoiceOrRef = string | Invoice;

export const InvoiceOrRefSchema: TypedSchema<InvoiceOrRef> = typed<InvoiceOrRef>(union(string(), InvoiceSchema));
